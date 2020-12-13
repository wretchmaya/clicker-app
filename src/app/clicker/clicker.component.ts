import { Component, Input, OnInit } from '@angular/core';
import { RecordsService } from '../services/records.service';

@Component({
	selector: 'app-clicker',
	templateUrl: './clicker.component.html',
	styleUrls: ['./clicker.component.scss']
})
export class ClickerComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}
}
