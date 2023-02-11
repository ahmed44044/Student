import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { AuthonticationService } from '../authontication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {
  ResultContainer:any[]=[]
  student:any;
  apidata:any;
  data = new Subscription();
  constructor(private _auth:AuthonticationService) { }



  ngOnInit(): void {
    this.data= this._auth.StuResult().subscribe({
      next:(data)=>{
        
        this.ResultContainer = data.result;
        this.student=data.result[0].studentId
        
        console.log(this.ResultContainer)
      } ,
      error:(err)=> {
        //  console.log(err);
        this.apidata = err.error.message;
        
      }
      
    });
  }
}

