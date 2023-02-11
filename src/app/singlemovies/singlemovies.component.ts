import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singlemovies',
  templateUrl: './singlemovies.component.html',
  styleUrls: ['./singlemovies.component.css']
})
export class SinglemoviesComponent implements OnInit {

  constructor(private _service:ApiService ,private _ActivatedRoute:ActivatedRoute) { }
  moviedetails :any;
  imgPath:string ='https://image.tmdb.org/t/p/w500';
  ngOnInit(): void {
    let movieId =this._ActivatedRoute.snapshot.params['id'];
    console.log(this._ActivatedRoute.snapshot.params['id']);
    
    

    this._service.getSingleMovie(movieId).subscribe({
      next:(data) =>{
        this.moviedetails =data;
        // console.log(data);
        

      },
      error:(err) =>
      {
        console.log(err);
        
      }
    })
  }

}
