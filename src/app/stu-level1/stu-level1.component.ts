import { AuthonticationService } from './../authontication.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stu-level1',
  templateUrl: './stu-level1.component.html',
  styleUrls: ['./stu-level1.component.css']
})
export class StuLevel1Component implements OnInit {
  studentContainer:any[] = [];
  ResultContainer:any[] = [];
  apidata:any;
  data = new Subscription();
 

  globalId:any
  getId(id:any){
    this.globalId=id
    console.log(this.globalId)

    this._auth.showResult(this.globalId).subscribe({
      next:(data)=>{
        this.apidata = data.message;
        if (data.message == 'done') {
          this.ResultContainer =data.result
          console.log(this.ResultContainer);
          
          this.apidata = 'delete success'
        }
      },
      error:(err)=>{
        // console.log(err);
        this.apidata =err.error.message;
      }
    })

  }

  constructor(private _auth:AuthonticationService) { }

  ngOnInit(): void {
    this.data= this._auth.StuLevel1().subscribe({
      next:(data)=>{

        // console.log(data.results);
        this.studentContainer = data.allStudent;
        // console.log(this.Student);
        
        console.log(this.studentContainer)
      } ,
      error:(err)=> {
        //  console.log(err);
        this.apidata = err.error.message;
        
      }
      
    });
  }

}
