import { Component, OnInit } from '@angular/core';
import { cvService } from '../../services /cv.service';
import { Country } from '../../services /country';
import {CountryData} from '../../services /countryData';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  public allCountries: Country[] = [];
  public selectedCountry: CountryData;
  private previousData: CountryData[] = [];
  private selectedCountryName: string;
  private clicked: boolean;
  private previousCountry: string;

  constructor(private _cvService: cvService ) {
    // Load in all our country data
    this.getAllCountryData();
  }

  ngOnInit(): void {
  }

  getAllCountryData(): void {
    this._cvService.getAllCountries().subscribe(
      response => {
        for (const country of response.response) {
          const newCountry: Country = {
            countryName: country.Country,
            countryCode: country.Slug,
          };
          this.allCountries.push(newCountry);
        }
        this.selectedCountryName = this.allCountries[0].countryName;
      }
    );
  }

  setSelectedCountry(country: string) {
    // Helper function to set the country code based on the dropdown
    this.selectedCountryName = country;
  }

  submitForm() {

    if (this.selectedCountryName){
      // Save previous country, so we don't emit twice
      if (this.previousCountry === undefined || this.previousCountry && this.previousCountry !== this.selectedCountryName){
        this._cvService.getCountryData(this.selectedCountryName).subscribe(
          response => {
            // Set clicked to true
            this.clicked = true;

            // If the response has cases make it selected, and push data to our previous data array
            if (response.cases) {
              this.selectedCountry = {
                countryName: response.country,
                numberOfCases: response.cases,
                data: true,
              };
              this.previousData.push(this.selectedCountry);
            } else {
              // Else if there is no data, trigger the screen to tell the user there is no data
              this.selectedCountry = {
                countryName: response.country,
                numberOfCases: -1,
                data: false,
              };
            }
          }
        );
        // update previous country
        this.previousCountry = this.selectedCountryName;
      }
    }
  }

}
