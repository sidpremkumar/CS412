import {Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Country} from '../../services /country';

@Component({
  selector: 'app-top-component',
  templateUrl: './top-component.component.html',
  styleUrls: ['./top-component.component.css']
})
export class TopComponentComponent implements OnInit {

  @Output() selectedCountry: EventEmitter<string> = new EventEmitter<string>();
  @Output() submitedCountry: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() allCountries: Country[];

  constructor() { }

  ngOnInit(): void { }

  // tslint:disable-next-line:typedef
  setSelectedCountry(country: string) {
    // Helper function to set the country code based on the dropdown
    this.selectedCountry.emit(country);
  }

  submitForm() {
    this.submitedCountry.emit(true);
  }

}
