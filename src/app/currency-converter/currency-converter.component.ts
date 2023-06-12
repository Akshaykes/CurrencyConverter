import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent {
  currencyToCountryMap: { [key: string]: string } = {
    USD: 'US',  // Example mapping: USD currency code corresponds to US country code
    INR: 'IN',  
    AED: 'AE',
    CAD: 'CA',
    AUD: 'AU',
    JPY: 'JP',
    CHF: 'CH',
    NZD: 'NZ',
    ZAR: 'ZA',
    BRL: 'BR',
    KRW: 'KR',
    // Add more mappings as needed
  };
  country1: string = 'US'; // Default country code
  country2: string = 'IN';
  // getCur: string; // Currency code

  amount: any;
  fromCurrency: any;
  toCurrency: any;
  result: any;
  currencyList: string[] = [
    'USD',
    'INR',
    'AED',
    'CAD',
    'AUD',
    'JPY',
    'CHF',
    'NZD',
    'ZAR',
    'BRL',
    'KRW'

      /// Add more currencies here
    ]; 

  constructor(private http: HttpClient) { }

  Currency() {
    if (this.amount) {
      const url = `https://api.exchangerate-api.com/v4/latest/${this.fromCurrency}`;
      this.http.get<any>(url).subscribe(data => {
        const exchangeRate = data.rates[this.toCurrency];
        this.result = `${this.amount} ${this.fromCurrency} = ${exchangeRate * this.amount} ${this.toCurrency}`;
      });
    } else {
      this.result = null;
    }
      // Set the country code based on the selected currency
  this.country1 = this.currencyToCountryMap[this.fromCurrency];
  this.country2 = this.currencyToCountryMap[this.toCurrency];
  }

 
}
