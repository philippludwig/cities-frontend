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

	private backend_url = "https://backend.citylist.ml";
	private credentials = "";

	private headers(): any {
		if (this.credentials === "") {
			return {};
		} else {
			return { "Authorization" : "Basic " + this.credentials };
		}
	}

  constructor(private http: HttpClient) { }

	// Set new HTTP Basic Auth credentials, which will be used in every request.
	setCredentials(credentials: string) {
		this.credentials = credentials;
	}

	getListOfCities(): Observable<Array<CityData>> {
		// Retrieve the current list of cities from the backend and
		// convert the JSON data to CityData.
		return this.http.get<any>(`${this.backend_url}/cities`, { headers: this.headers() }).pipe(
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
		return this.http.get<any>(`${this.backend_url}/cities/${id}`, { headers: this.headers() }).pipe(
			map(a => new CityData(a))
		);
	}

	addCity(name: string): Observable<CityData> {
		return this.http.put<any>(`${this.backend_url}/cities/${name}`, {}, { headers: this.headers() } ).pipe(
			map(a => new CityData(a))
		);
	}
}
