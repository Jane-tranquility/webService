import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class GiphyService {

  constructor(private http:Http) { }

  searchGiphy(text:string){
  	return this.http.get("https://api.giphy.com/v1/gifs/search?api_key=MctKiXTz7JVwLyFGb8aejrQomzFudnvb&limit=5&offset=0&rating=G&lang=en&q="+text)
  					.toPromise();
  }

}
