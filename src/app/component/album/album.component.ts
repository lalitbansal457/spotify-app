import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../service/spotify.service';
import {ActivatedRoute} from '@angular/router';

@Component({
	selector: 'artist',
	templateUrl: './app/component/album/album.component.html',
	providers: [SpotifyService]
})

export class albumComponent implements OnInit {
	id:string;
	albums:[];
	constructor(private _spotifyService: SpotifyService, private _route: ActivatedRoute) {
		console.log("fd");
	}
	ngOnInit() {
		console.log(this._route)
		this._route.params.map(params => params['id']).subscribe((id) => {
			
			this._spotifyService.getAlbum(id).subscribe(album => {
				this.album = album;
				console.log(this.albums)
			})
		})
	}
}