import { AuthonticationService } from './../authontication.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // first_name = new FormControl();
  registerationForm = new FormGroup({
    userName : new FormControl('',[Validators.required , Validators.minLength(3), Validators.maxLength(20)]),
    age : new FormControl('',[ Validators.required,Validators.min(18),Validators.max(23)]),
    email : new FormControl('',[Validators.required, Validators.email]),
    level:new FormControl(null,[Validators.pattern('^[1234]{1}$'),Validators.required]),
    DepartmentName:new FormControl(null,[Validators.required]),
    NationalID:new FormControl(null,[Validators.required,Validators.pattern(/(2|3)[0-9][1-9][0-1][1-9][0-3][1-9](01|02|03|04|11|12|13|14|15|16|17|18|19|21|22|23|24|25|26|27|28|29|31|32|33|34|35|88)\d\d\d\d\d/)]),
    password:new FormControl(null,[Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/) ,Validators.required]),
    cPassword:new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]),
});
apidata:any;
isLoading:boolean=false
sendData(form:any)
{
  this.isLoading=true
  if(form.valid){
    this._AuthonticationService.signUp(form.value).subscribe({
      next:(data)=>{
        // console.log(data);
        this.apidata = data.message;
        if(data.message == 'done')
        {
          this._router.navigate(['/login'])
         this.isLoading=false
        }
        
      },
      error:(err)=>{
        this.apidata=err.error.message
        // console.log(err);
      
      }
    })

  }
  else
  {
    // console.log('inputs error');
    this.apidata='plz check the Inputs'
    this.isLoading=false
    
  }


  
}

  constructor(private _AuthonticationService:AuthonticationService ,private _router:Router) { }
 
  ngOnInit(): void { 
    // $('#signup').particleground({
    // });
  }

}
