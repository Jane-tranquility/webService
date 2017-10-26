import { Injectable } from '@angular/core';
import {SearchRecord} from './searchRecord.model';

@Injectable()
export class SearchHistoryService {
	searchList:Array<SearchRecord>;
  constructor() { 
  	this.searchList=[]
  }
  getRecords(){
  	return this.searchList;
  }

}
