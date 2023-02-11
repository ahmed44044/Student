import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthonticationService } from '../authontication.service';

@Component({
  selector: 'app-scientific-reference',
  templateUrl: './scientific-reference.component.html',
  styleUrls: ['./scientific-reference.component.css']
})
export class ScientificReferenceComponent implements OnInit {

  
  ScientificReferenceForm = new FormGroup({
    LinkReference : new FormControl(null,[Validators.required]),
    courseName : new FormControl(null,[Validators.required ]),
    
    
});

apidata:any;



sendData(form:any)
{
     

 
  if(form.valid){
    this._auth.addScientificReference(form.value).subscribe({
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
