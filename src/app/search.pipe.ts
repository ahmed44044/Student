import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform( moviesContainer:any[] , term:string): any[] {
    return moviesContainer.filter((movie)=>movie.title.toLowerCase().includes(term.toLowerCase()));
  }

}
