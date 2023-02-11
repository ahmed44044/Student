import { Component, OnInit } from '@angular/core';
import { AuthonticationService } from '../authontication.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  
  constructor(private _auth:AuthonticationService) { 
   
  }
 




  courseContainer:any[] = [];
  Student:any;
  apidata:any;
  data = new Subscription();
  globalId:any
  getId(id:any){
    this.globalId=id
    // console.log(this.globalId);
   
    this._auth.deleteCourse(this.globalId).subscribe({
      next:(data)=>{
        this.apidata = data.message;
        if (data.message == 'done') {
          this.apidata = 'delete success'
        }
      },
      error:(err)=>{
        // console.log(err);
        this.apidata =err.error.message;
      }
    })
  }
 
  
  
  ngOnInit(): void {
  this.data= this._auth.getCourses().subscribe({
      next:(data)=>{
        
        // console.log(data.results);
        this.courseContainer = data.allCourse[0].material;
        this.Student=data.allCourse[0]
        // console.log(this.Student);
        
        // console.log(this.courseContainer)
      } ,
      error:(err)=> {
        //  console.log(err);
        this.apidata = err.error.message;
        
      }
      
    });


    // this._auth.deleteCourse(this.globalId).subscribe({
    //   next:(data)=>{
    //     this.apidata = data.message;
    //     if (data.message == 'done') {
    //       this.apidata = data.message;
    //     }
    //   },
    //   error:(err)=>{
    //     // console.log(err);
    //     this.apidata =err.error.message;
    //   }
    // })
   


  }

}