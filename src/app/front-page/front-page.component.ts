import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { RecordsService } from '../services/records.service';

@Component({
	selector: 'app-front-page',
	templateUrl: './front-page.component.html',
	styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {
	constructor(public recordsService: RecordsService, public router: Router) { }
	playerName = '';
	ngOnInit(): void {
	}
	onNameEnter() {
		if (!this.playerName.trim()) {
			alert('Enter your name, please');
			return;
		}
		this.recordsService.userName = this.playerName.trim();
		this.recordsService.checkLS();
		this.router.navigate(['/game']);
	}
}
