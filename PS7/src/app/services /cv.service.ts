import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { cvConfig } from '../components/config/cvConfig';

@Injectable({
  providedIn: 'root'
})

// tslint:disable-next-line:class-name
export class cvService {

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<any> {
    return this.http.get<any>(cvConfig.baseUrl);
  }

  getCountryData(countryCode: string): Observable<any> {

    // https://stackoverflow.com/questions/29954037/why-is-an-options-request-sent-and-can-i-disable-it
    // https://stackoverflow.com/questions/42352854/how-i-add-headers-to-http-get-or-http-post-in-typescript-and-angular-2
    return this.http.post<any>(cvConfig.ps4Url, {country: countryCode});
  }
}
