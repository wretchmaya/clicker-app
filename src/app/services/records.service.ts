import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class RecordsService {
	timer = 10;
	timerName = 'timer_10';
	previousRecord;
	previousRecordFive;
	previousRecordTen;
	previousRecordFifteen;
	clicks = 0;
	userName = '';
	btnDisabled = false;
	radioDisabled = false;
	btnText = 'Click to start';
	timerId;
	tempTimer = this.timer;
	winToggle;
	noWinToggle;
	goodToggle;
	constructor() { }
	checkLS() {
		if (localStorage.getItem('timer_5')) {
			this.previousRecordFive = +localStorage.getItem('timer_5');
		}
		if (localStorage.getItem('timer_10')) {
			this.previousRecordTen = +localStorage.getItem('timer_10');
		}
		if (localStorage.getItem('timer_15')) {
			this.previousRecordFifteen = +localStorage.getItem('timer_15');
		}
		this.previousRecord = this.previousRecordTen;
	}
	setToLS() {
		if (this.clicks > +localStorage.getItem(`${this.timerName}`)) {
			localStorage.setItem(`${this.timerName}`, this.clicks.toString());
			this.winToggle = true;
		} else {
			this.noWinToggle = true;
			if (+localStorage.getItem(`${this.timerName}`) - 5 > this.clicks) {
			}
		}
	}
	displayRecord() {
		this.checkLS();
		switch (this.timerName) {
			case 'timer_5':
				this.previousRecord = this.previousRecordFive;
				break;
			case 'timer_10':
				this.previousRecord = this.previousRecordTen;
				break;
			case 'timer_15':
				this.previousRecord = this.previousRecordFifteen;
				break;
		}
	}
	startGame() {
		this.btnText = 'click to count';
		this.radioDisabled = true;
		if (this.timerId !== undefined) {
			return;
		}
		this.timerId = setInterval(() => {
			this.timer--;
			if (!this.timer) {
				this.setToLS();
				clearInterval(this.timerId);
				this.timerId = undefined;
				this.btnDisabled = true;
			}
		}, 1000);
	}
	resetGame() {
		this.displayRecord();
		clearInterval(this.timerId);
		this.timerId = undefined;
		this.timer = this.tempTimer || 10;
		this.clicks = 0;
		this.btnDisabled = false;
		this.radioDisabled = false;
		this.winToggle = false;
		this.noWinToggle = false;
	}
	clickCount() {
		this.clicks++;
	}
	changeTimer(event) {
		this.timerName = event.target.id;
		this.timer = +event.target.value;
		this.tempTimer = +event.target.value;
		this.displayRecord();
	}
}
