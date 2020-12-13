import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../services/records.service';

@Component({
  selector: 'app-info-field',
  templateUrl: './info-field.component.html',
  styleUrls: ['./info-field.component.scss']
})
export class InfoFieldComponent implements OnInit {

  constructor(public recordService: RecordsService) { }

  ngOnInit(): void {
  }

}
