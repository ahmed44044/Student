import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthonticationService } from '../authontication.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {

  
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
     
  let courseId =this._route.snapshot.params['id'];
  console.log(this._route.snapshot.params['id']);
 
  if(form.valid){
    this._auth.updateCourse(form.value,courseId).subscribe({
      next:(data)=>{
        // console.log({data})
        this.apidata = data.message;
        if(data.message == 'done')
        {
          this.apidata =data.message;
          this._router.navigate(['/about'])
      
         
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
  constructor(private _auth:AuthonticationService,private _route:ActivatedRoute,private _router:Router) { }

  ngOnInit(): void {
 

    
  }

}
