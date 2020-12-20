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

  constructor(private http: HttpClient) { }

	getListOfCities(): Observable<Array<CityData>> {
		return this.http.get<any>(`http://127.0.0.1:8000/cities`).pipe(
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
		return this.http.get<any>(`http://127.0.0.1:8000/${id}`).pipe(
			map(a => new CityData(a))
		);
	}

	addCity(name: string): Observable<CityData> {
		return this.http.put<any>(`http://127.0.0.1:8000/cities/${name}`, {}).pipe(
			map(a => new CityData(a))
		);
	}
}
