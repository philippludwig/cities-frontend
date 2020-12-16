import { Component } from '@angular/core';
import { CityData, CitiesService } from './cities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	cities: Array<CityData> = new Array();

	constructor (private citiesService: CitiesService) {}

	ngOnInit() {
		this.citiesService.getListOfCities().subscribe(cities => {this.cities = cities;});
	}
}
