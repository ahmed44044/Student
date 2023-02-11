import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthonticationService } from '../authontication.service';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css']
})
export class TvshowComponent implements OnInit {

  constructor(private _auth:AuthonticationService) { }

  studentContainer:any[] = [];
  ResultContainer:any[] = [];
  apidata:any;
  data = new Subscription();
 

  globalId:any
  getId(id:any){
    this.globalId=id
    // console.log(this.globalId)

    this._auth.showResult(this.globalId).subscribe({
      next:(data)=>{
        // console.log("uuii");
        
        this.apidata = data.message;
        if (data.message == 'done') {
          this.ResultContainer =data.result
          console.log(this.ResultContainer);
          
        }
      },
      error:(err)=>{
        console.log(err);
        this.apidata =err.error.message;
      }
    })

  }

  ngOnInit(): void {
    this.data= this._auth.allStudent('User').subscribe({
      next:(data)=>{

        // console.log(data.results);
        this.studentContainer = data.allStudents;
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
