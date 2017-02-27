import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../service/spotify.service';
import {ActivatedRoute} from '@angular/router';

@Component({
	selector: 'artist',
	templateUrl: './app/component/artist.component.html'
})

export class artistComponent implements OnInit {
	id:string;
	artist:[];
	albums:[];
	constructor(private _spotifyService: SpotifyService, private _route: ActivatedRoute) {

	}
	getMusic() {

	}
	ngOnInit() {
		this._route.params.map(params => params['id']).subscribe((id) => {
			this._spotifyService.getArtist(id).subscribe(artist => {
				this.artist = artist;
			})
		})
	}
}