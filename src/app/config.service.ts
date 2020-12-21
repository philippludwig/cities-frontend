import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

	public getConfig(): Observable<any> {
		return from (fetch('./assets/config.json').then(resp => resp.json()));
	}
}
