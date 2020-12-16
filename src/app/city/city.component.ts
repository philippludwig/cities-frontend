import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

	@Input() name: string = "";
	temperature: number = NaN;

  constructor() {}

  ngOnInit(): void {
  }

}
