import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthonticationService } from '../authontication.service';

@Component({
  selector: 'app-add-course-list4',
  templateUrl: './add-course-list4.component.html',
  styleUrls: ['./add-course-list4.component.css']
})
export class AddCourseList4Component implements OnInit {

  
  courseForm = new FormGroup({
    course : new FormControl(null,[Validators.required]),
    courseStatus : new FormControl(null,[Validators.pattern(/^(Compulsory course|Elective Course)$/),Validators.required ]),
    courseCode : new FormControl(null,[Validators.required ]),
    courseRequirement : new FormControl(null,[Validators.required ]),
    numberOfHoursOfCourse : new FormControl(null,[Validators.pattern(/^(2|3)$/),Validators.required ]),
    
});

apidata:any;


sendData(form:any)
{
  
 
  if(form.valid){
    this._AuthonticationService.addCourseListLev4(form.value).subscribe({
      next:(data)=>{
        // console.log({data})
        this.apidata = data.message;
        if(data.message == 'done')
        {
          this.apidata =data.message;
         
          
         
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
    // console.log('error');
    this.apidata ='plz check inputs,u write anything wrong';
    
  }


  
}

  constructor(private _AuthonticationService:AuthonticationService ,private _router:Router) { }


  ngOnInit(): void {
  }

}
