import { Component } from '@angular/core';

// Country and CountryData class'
import { Country } from './country';
import { CountryData } from './countryData';

// Config file
import { countryEndpoint } from './config';

// Mocked data
import { countryDataMock , countriesDataMock } from './mockData';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS6';
  allCountries: Country[] = [];
  selectedCountry: CountryData;
  clicked: boolean = false;
  selectedCountryCode: string;

  constructor() {
    // First load in all our country data from the API
    this.getAllCountries();
  }

  getAllCountries(): void {
    // Helper function to load and parse all the countries we have access too
    for (const country of countryDataMock) {
      const newCountry: Country = {
        countryName: country.Country,
        countryCode: country.Slug,
      };
      this.allCountries.push(newCountry);
    }

    // Set our selected country to null (as we have not selected anything yet)
    this.selectedCountry = null;

    // Set our selected country code to the first value (i.e. the default value of the dropdown)
    this.selectedCountryCode = this.allCountries[0].countryCode;
  }

  setSelectedCountry(countryCode: string) {
    // Helper function to set the country code based on the dropdown
    this.selectedCountryCode = countryCode;
  }

  submitForm() {
    // Helper function to take action after the 'submit' button is pressed
    const url = countryEndpoint.replace('COUNTRYNAME', this.selectedCountryCode);

    // Mock the http.get call
    const response = countriesDataMock[url];

    // Determine if the country we selected has any data
    if (response.length >= 1) {
      const latestData = response[response.length - 1];
      this.selectedCountry = {
        countryName: latestData.Country,
        numberOfCases: latestData.Cases,
        data: true,
      };
    } else {
      this.selectedCountry = {
        countryName: 'N/A',
        numberOfCases: -1,
        data: false,
      };
    }

    // Set our clicked bool to true to display the data
    this.clicked = true;
  }
}
