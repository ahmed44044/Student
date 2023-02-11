 import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _HttpClient:HttpClient) {
    if(localStorage.getItem('userToken') !==null)
    this.getNowPlaying;
    this.getAllMovies;
   }
  getNowPlaying():Observable<any> {
    return  this._HttpClient.get('https://api.themoviedb.org/3/movie/now_playing?api_key=afed2bdc759c185496dcd94a60b71d77&language=en')
  }
  getSingleMovie(id:any):Observable<any>
  {
   return this._HttpClient.get('https://api.themoviedb.org/3/movie/'+id+'?api_key=afed2bdc759c185496dcd94a60b71d77&language=en-')
  }
  getAllMovies(pagaNumber:number):Observable<any> {
    return  this._HttpClient.get('https://api.themoviedb.org/3/discover/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page='+pagaNumber+'')
  }
  // getNetwork():Observable<any>
  // {
  //   return this._HttpClient.get('https://api.themoviedb.org/3/network/{network_id}?api_key=eba8b9a7199efdcb0ca1f96879b83c44')
  // }
}
