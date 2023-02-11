import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthonticationService } from '../authontication.service';

@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.css']
})
export class ShowResultComponent implements OnInit {
 
  constructor(private _auth:AuthonticationService,private _route:ActivatedRoute) { }
  ResultContainer:any[]=[]
  student:any;
  apidata:any;
  data = new Subscription();
  ngOnInit(): void {
    let studentId = this._route.snapshot.params['id'];
    console.log(studentId);
    
    this.data= this._auth.showResult(studentId).subscribe({
      next:(data)=>{
        
        this.ResultContainer = data.result;
        this.student=data.result[0].studentId
        // console.log(this.Student);
        
        // console.log(this.courseContainer)
      } ,
      error:(err)=> {
        //  console.log(err);
        this.apidata = err.error.message;
        
      }
      
    });
  }

}
