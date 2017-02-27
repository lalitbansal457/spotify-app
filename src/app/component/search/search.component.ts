import {Component} from '@angular/core';
import {SpotifyService} from '../../service/spotify.service';

@Component({
	selector: 'search',
	templateUrl: './app/component/search/search.component.html',
	providers: [SpotifyService]
})

export class SearchComponent {
	searchStr: string;
	searchRes:[];
	constructor(private _spotifyService: SpotifyService) {

	}

	searchMusic() {
		this._spotifyService.searchMusic(this.searchStr).subscribe(res => {
				this.searchRes = res.artists.items;
				console.log(res.artist, res)
		})	
	}


}