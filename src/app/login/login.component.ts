import jwtDecode from 'jwt-decode';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthonticationService } from '../authontication.service';
declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email : new FormControl('',[Validators.required, Validators.email]),
    password:new FormControl(null,[Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/) ,Validators.required])
});
apidata:any;
userName:string='';
sendData(form:any)
{
  
  if(form.valid){
    this._AuthonticationService.signIn(form.value).subscribe({
      next:(data)=>{
        // console.log({data})
        this.apidata = data.message;
        if(data.message == 'done') 
        {
          localStorage.setItem('token',data.token)
          localStorage.setItem('role',data.role)
          // this._AuthonticationService.isLogin = data.token;
         
          let userData:any = jwtDecode(data.token);
          this._AuthonticationService.userName =userData.userName;
          this._AuthonticationService.isLogin.next(data.token);
          
          
          this._router.navigate(['/movies'])
         
        }
      },
      error:(err)=>{
        // console.log(err);
        this.apidata =err.error.message;
      }
    })

  }
  else
  {
    // console.log('inputs error');
    this.apidata ='plz check inputs,u write anything wrong';
    
  }


  
}

  constructor(private _AuthonticationService:AuthonticationService ,private _router:Router) { }


  ngOnInit(): void {
  //   $('#login').particleground({
  // });
      
}

}
