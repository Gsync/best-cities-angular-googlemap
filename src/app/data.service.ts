import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from './city';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  selectedCity = new Subject<City>();
  clearSelected = new Subject<boolean>();
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('assets/data.csv', { responseType: 'text' }).pipe(
      map((d) => this.convertToObject(d))
    );
  }

  convertToObject(data: any): City[] {
    let result: City[] = [];
    let dataArray = data.split('\n');
    for (let index = 1; index < dataArray.length - 1; index++) {
      let row = dataArray[index].split(',');
      const newCity = new City(
        +row[0],
        row[1],
        +row[2],
        +row[3],
        +row[4],
        row[5],
        +row[6],
        +row[7],
        +row[8],
        +row[9],
        +row[10],
        +row[11],
      );
      result.push(newCity);
    }
    return result;
  }
}
