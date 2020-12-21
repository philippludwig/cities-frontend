import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class CityData {
	name: string = "";
	id: number = 0
	href: string = "";
	temperature: number = NaN;

	constructor(json: any) {
		this.name = json["name"];
		this.id = json["id"];
		this.href = json["href"];
		this.temperature = json["temperature"]
	}
}

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

	private backend_url = "http://127.0.0.1:8000";

  constructor(private http: HttpClient) { }

	getListOfCities(): Observable<Array<CityData>> {
		// Retrieve the current list of cities from the backend and
		// convert the JSON data to CityData.
		return this.http.get<any>(`${this.backend_url}/cities`).pipe(
			map(a => {
				let cities = [];
				for (let j of a) {
					cities.push(new CityData(j));
				}
				return cities;
			})
		);
	}

	getCity(id: number): Observable<CityData> {
		return this.http.get<any>(`${this.backend_url}/cities/${id}`).pipe(
			map(a => new CityData(a))
		);
	}

	addCity(name: string): Observable<CityData> {
		return this.http.put<any>(`${this.backend_url}/cities/${name}`, {}).pipe(
			map(a => new CityData(a))
		);
	}
}
