import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent }  from './app.component';
import { NavbarComponent }  from './component/navbar/navbar.component';
import { SearchComponent }  from './component/search/search.component';
import { AboutComponent }  from './component/about/about.component';
import { ArtistComponent }  from './component/artist/artist.component';
import { albumComponent }  from './component/album/album.component';



const routes: Routes = [
	{path: '', component: SearchComponent},
	{path: 'about', component: AboutComponent},
	{path: 'artist/:id', component: ArtistComponent},
	{path: 'album/:id', component: albumComponent},
	
];



@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, NavbarComponent, SearchComponent, AboutComponent, ArtistComponent, albumComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
