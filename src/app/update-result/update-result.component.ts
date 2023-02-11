import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthonticationService } from '../authontication.service';

@Component({
  selector: 'app-update-result',
  templateUrl: './update-result.component.html',
  styleUrls: ['./update-result.component.css']
})
export class UpdateResultComponent implements OnInit {



  ResultForm = new FormGroup({
    Degree : new FormControl(null,[Validators.required]),

});

apidata:any;


sendData(form:any)
{
  let iD = this._route.snapshot.params['id'];
 console.log(iD);
 
  if(form.valid){
    this._auth.updateResult(form.value,iD).subscribe({
      next:(data)=>{
        console.log({data})
        this.apidata = data.message;
        console.log(data.message);
        
        if(data.message == 'done')
        {
          this.apidata =data.message;
        
      
         
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
    // console.log('error');
    this.apidata ='plz check inputs,u write anything wrong';
    
  }


  
}
  constructor(private _auth:AuthonticationService,private _router:Router,private _route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
