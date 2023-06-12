import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  url = 'https://v6.exchangerate-api.com/v6/7cb391f512413dca554cedde/latest/USD'
  getCurrency: any;

  constructor(private http: HttpClient) { }
  currencyResult(){
    return this.http.get(`${this.url}/${this.getCurrency}`);
 }
}
