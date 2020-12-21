import { Component } from '@angular/core';
import { CityData, CitiesService } from './cities.service';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	cities: Array<CityData> = new Array();

	constructor (private citiesService: CitiesService, private configService: ConfigService) {}

	ngOnInit() {
		this.configService.getConfig().subscribe(
			config => {
				this.citiesService.setCredentials(config["credentials"]);
				this.citiesService.getListOfCities().subscribe(cities => {this.cities = cities;});
			}
		);
	}

	addCity(el: HTMLInputElement) {
		this.citiesService.addCity(el.value).subscribe(new_city => {this.cities.push(new_city)});
		return false;
	}
}
