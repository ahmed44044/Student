import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthonticationService } from '../authontication.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
    
  StudentForm = new FormGroup({
    NationalID:new FormControl(null,[Validators.required,Validators.pattern(/(2|3)[0-9][1-9][0-1][1-9][0-3][1-9](01|02|03|04|11|12|13|14|15|16|17|18|19|21|22|23|24|25|26|27|28|29|31|32|33|34|35|88)\d\d\d\d\d/)])
    
    
});
apidata:any

sendData(form:any)
{
     

 
  if(form.valid){
    this._auth.addStudent(form.value).subscribe({
      next:(data)=>{
        console.log({data})
        this.apidata = data.message;
        console.log(data.message);
        
        if(data.message == 'done')
        {
          this.apidata =data.message;
      
          // this._router.navigate(['/allStudent'])
        }
      },
      error:(err)=>{
 

        console.log(err);
        this.apidata =err.error.message;
      }
    })

  }
  else
  {
    console.log('error');
    this.apidata ='plz check inputs,u write anything wrong';
    
  }


  
}

  constructor(private _auth:AuthonticationService,private _router:Router) { }

  ngOnInit(): void {
  }

}
