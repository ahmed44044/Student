import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { AuthonticationService } from '../authontication.service';
import { Subscription } from 'rxjs';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  StudentContainer:any[] = [];
  student:any
  userName:any
  apidata:any;
  data = new Subscription();
  id:any
  constructor(private _auth:AuthonticationService) { }
 

  ngOnInit(): void {
    let token:any=  localStorage.getItem('token')
    if(token !=null){
    
   let userData:any = jwtDecode(token);
  this.id=userData.id
 
    }
    this.data= this._auth.profile().subscribe({
      next:(data)=>{

        // console.log(data);
        this.StudentContainer = data.student[0];
        this.student=this.StudentContainer
       // console.log(this.student);
        
        // console.log(this.StudentContainer)
      } ,
      error:(err)=> {
        //  console.log(err);
        this.apidata = err.error.message;
        
      }
      
    });
}

}
