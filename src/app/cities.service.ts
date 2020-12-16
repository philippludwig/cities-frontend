import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CityData {
	name: string = "";
	id: number = 0
	href: string = "";
}

@Injectable()
export class CitiesService {

  constructor(private http: HttpClient) { }

	getListOfCities(): Observable<Array<CityData>> {
		return this.http.get<any>(`http://127.0.0.1:8000/cities`).pipe(
			map(a => {
				let cities = [];
				for (let j of a) {
					let data = new CityData();
					data.name = j["name"];
					cities.push(data);
				}
				return cities;
			})
		);
	}
}
