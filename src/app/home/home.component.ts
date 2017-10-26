import { Component, OnInit } from '@angular/core';
import {SearchRecord} from '../searchRecord.model';
import {SearchHistoryService} from '../search-history.service';
import {WikipediaService} from '../wikipedia.service';
import {GiphyService} from '../giphy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	searchText="";
	searchList:Array<SearchRecord>;
	dataWiki:Array<string>;
	dataGiphy:Array<string>=[];
	searchItem(){
		this.dataGiphy=[];
		this.searchList.push(new SearchRecord(this.searchText, Date.now()));
		this.wiki.searchWiki(this.searchText).then((request)=>this.dataWiki=request.json()[1]);
		//this.giphy.searchGiphy(this.searchText).then((request)=>this.dataGiphy=request.json()["data"][0]["images"]["original_still"]["url"])
		this.giphy.searchGiphy(this.searchText).then((request)=>{for (let record of request.json()["data"]){
																	console.log(record["images"]["downsized"]["url"]);
																	this.dataGiphy.push(record["images"]["fixed_height_still"]["url"]);
																}})
		
	}


  constructor(private searchHistory:SearchHistoryService,private wiki:WikipediaService, private giphy:GiphyService) { }

  ngOnInit() {
  	this.searchList=this.getHistory();
  	//this.data=this.getData();
  }

  getHistory(){
  	return this.searchHistory.getRecords();
  }

  // getData(){
  // 	return this.wiki.getData();
  // }

}
