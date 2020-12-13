import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecordsService } from '../services/records.service';

@Component({
	selector: 'app-play-field',
	templateUrl: './play-field.component.html',
	styleUrls: ['./play-field.component.scss']
})
export class PlayFieldComponent implements OnInit {

	constructor(public recordService: RecordsService, public router: Router) { }

	ngOnInit(): void {
	}
	startGame() {
		this.recordService.startGame();
	}
	resetGame() {
		this.recordService.resetGame();
	}
	clickCount() {
		this.recordService.clickCount();
	}
	changeName() {
		this.recordService.resetGame();
		this.router.navigate(['/welcome']);
	}
}
