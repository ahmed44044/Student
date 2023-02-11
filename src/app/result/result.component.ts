import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthonticationService } from '../authontication.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {



  
  ResultForm = new FormGroup({
    Degree : new FormControl(null,[Validators.required]),
    subjectName : new FormControl(null,[Validators.required ]),
    
    
});

apidata:any;


sendData(form:any)
{
     
  //  let userName = this._route.snapshot.params['userName'];
   let studentId = this._route.snapshot.params['id'];
 
  if(form.valid){
    this._auth.addResult(form.value,studentId).subscribe({
      next:(data)=>{
        console.log({data})
        this.apidata = data.message;
        console.log(data.message);
        
        if(data.message == 'done')
        {
          this.apidata =data.message;
          // this._router.navigate(['/about'])
      
         
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

  constructor(private _auth:AuthonticationService , private _route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
