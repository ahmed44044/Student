import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthonticationService } from '../authontication.service';

@Component({
  selector: 'app-show-reference',
  templateUrl: './show-reference.component.html',
  styleUrls: ['./show-reference.component.css']
})
export class ShowReferenceComponent implements OnInit {
  constructor(private _auth:AuthonticationService) { }

  ReferenceContainer:any[] = [];
  apidata:any;
  data = new Subscription();
 

 

  ngOnInit(): void {
    this.data= this._auth.ScientificReference('User').subscribe({
      next:(data)=>{

        console.log(data);
        this.ReferenceContainer = data.Reference;
        // console.log(this.Student);
        
        console.log(this.ReferenceContainer)
      } ,
      error:(err)=> {
        //  console.log(err);
        this.apidata = err.error.message;
        
      }
      
    });

  }

}
