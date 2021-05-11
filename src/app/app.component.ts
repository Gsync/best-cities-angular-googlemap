import { Component, OnInit } from '@angular/core';
import { City } from './city';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cities: City[] = [];
  title = 'best-cities-googlemap';

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.getData().subscribe((d: City[]) => {
      this.cities = d;
    });
  }

}
