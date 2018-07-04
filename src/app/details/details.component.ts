import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  countryName: Object;
  country: Object;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.countryName = params.name;

    } )
   }

  ngOnInit() {
    this.dataService.getCountryDetails(this.countryName).subscribe(data => {
      console.log(data);
      this.country = data;
    });
  }

}
