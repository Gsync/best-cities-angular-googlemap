export class City {
  Rank?: number;
  City?: string;
  Latitude?: number;
  Longitude?: number;
  Population?: number;
  Country?: string;
  Place?: number;
  Product?: number;
  Programming?: number;
  People?: number;
  Prosperity?: number;
  Promotion?: number;

  constructor(
    Rank: number,
    City: string,
    Latitude: number,
    Longitude: number,
    Population: number,
    Country: string,
    Place: number,
    Product: number,
    Programming: number,
    People?: number,
    Prosperity?: number,
    Promotion?: number,
  ) {
    this.Rank = Rank;
    this.City = City;
    this.Latitude = Latitude;
    this.Longitude = Longitude;
    this.Population = Population;
    this.Country = Country,
    this.Place = Place,
    this.Product = Product,
    this.Programming = Programming,
    this.People = People,
    this.Prosperity = Prosperity,
    this.Promotion = Promotion
  }
}
