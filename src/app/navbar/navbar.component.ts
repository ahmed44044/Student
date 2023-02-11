import { Router } from '@angular/router';
import { AuthonticationService } from './../authontication.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
userLogin:any;
StudentContainer:any[] = [];
student:any
userName:any
apidata:any;
data = new Subscription();
log:any;
  constructor(private _authontication:AuthonticationService ,private _router:Router) { }
  logOut(){
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    this._authontication.isLogin.next(null);
    this._router.navigate(['/login'])
    this.userName='';

  }
  ngOnInit(): void {

    this.data= this._authontication.profile().subscribe({
      next:(data)=>{

        // console.log(data);
        this.StudentContainer = data.student[0];
        this.student=this.StudentContainer
// console.log(this.student);
        
        // console.log(this.StudentContainer)
      } ,
      error:(err)=> {
         console.log(err);
        
      }
      
    });
    // this.userLogin = this._authontication.isLogin;
    this._authontication.isLogin.subscribe({
      next:(newValue)=>{
        this.log=newValue
        // console.log(this.log);
        
        if (this.log == 'User') {
          this.userLogin ='User';
        } else if(this.log == 'Admin') {
          this.userLogin ='Admin';
        }
        
        
        this.userName =this._authontication.userName;
        // this._authontication.userName='';
      },
    });
  }


}
