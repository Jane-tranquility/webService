import {Routes, RouterModule} from "@angular/router";
import { Component, OnInit, Input } from '@angular/core';
import {SearchRecord} from '../searchRecord.model';
import {SearchHistoryService} from '../search-history.service'

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit {
	searchRecords:Array<SearchRecord>;
  	constructor(private searchHistory:SearchHistoryService) { }

  	ngOnInit() {
  	this.searchRecords=this.getHistory();
  	}

  getHistory(){
  	return this.searchHistory.getRecords();
  }


}
