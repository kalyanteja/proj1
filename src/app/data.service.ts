import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCountries(){
    return this.http.get("http://localhost:3000/home");
  }

  getCountryDetails(name){
    console.log(name);
    return this.http.get(`http://localhost:3000/details/${name}`);
  }
}
