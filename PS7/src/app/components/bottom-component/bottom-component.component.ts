import {Component, Input, OnInit} from '@angular/core';
import {CountryData} from '../../services /countryData';

@Component({
  selector: 'app-bottom-component',
  templateUrl: './bottom-component.component.html',
  styleUrls: ['./bottom-component.component.css']
})
export class BottomComponentComponent implements OnInit {

  @Input() selectedCountry: CountryData;

  constructor() { }

  ngOnInit(): void {
  }

}
