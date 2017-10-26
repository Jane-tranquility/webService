import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class WikipediaService {
	//data: Array<string>;

  constructor(private http:Http) { }

  searchWiki(text:string){
  	return this.http.get("http://en.wikipedia.org/w/api.php?origin=*&format=json&limit=5&action=opensearch&search="+text)
  					.toPromise();
  					//.then((request)=>this.data=request.json()[1]);
  }

}

