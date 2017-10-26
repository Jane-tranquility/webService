import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router'
import { AppComponent } from './app.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { HomeComponent } from './home/home.component';
import {SearchHistoryService} from './search-history.service'
import {WikipediaService} from './wikipedia.service'
import {GiphyService} from './giphy.service';

const routes=[{path:'Search History',component: SearchHistoryComponent},
              {path:'Home Page', component: HomeComponent}]

@NgModule({
  declarations: [
    AppComponent,
    SearchHistoryComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SearchHistoryService,
     WikipediaService,
     GiphyService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }


