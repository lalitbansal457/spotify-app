import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../service/spotify.service';
import {ActivatedRoute} from '@angular/router';

@Component({
	selector: 'artist',
	templateUrl: './app/component/artist/artist.component.html',
	providers: [SpotifyService]
})

export class ArtistComponent implements OnInit {
	id:string;
	artist:[];
	albums:[];
	constructor(private _spotifyService: SpotifyService, private _route: ActivatedRoute) {
		console.log("fd");
	}
	getMusic() {

	}
	ngOnInit() {
		console.log(this._route)
		this._route.params.map(params => params['id']).subscribe((id) => {
			console.log(id)
			this._spotifyService.getArtist(id).subscribe(artist => {
				this.artist = artist;
				console.log(this.artist)
			})
			this._spotifyService.getAlbums(id).subscribe(albums => {
				this.albums = albums.items;
				console.log(this.albums)
			})
		})
	}
}