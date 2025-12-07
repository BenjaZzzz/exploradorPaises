// src/app/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // URL de la API - si falla, usamos datos mock automáticamente
  private apiUrl = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient) { }

  // Método para obtener todos los países
  getAllCountries(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}all?fields=name,flags,capital,population,region`).pipe(
      catchError(error => {
        console.log('API no disponible, usando datos de ejemplo...');
        return this.getMockCountries();
      })
    );
  }

  // Método para obtener país por nombre
  getCountryByName(name: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}name/${encodeURIComponent(name)}`).pipe(
      catchError(error => {
        console.log(`País "${name}" no encontrado, usando datos de ejemplo...`);
        return this.getMockCountryByName(name);
      })
    );
  }

  // Datos de ejemplo (mock) para cuando la API falle
  private getMockCountries(): Observable<any[]> {
    const mockData = [
      {
        name: { common: 'Perú', official: 'Republic of Peru' },
        capital: ['Lima'],
        population: 32971846,
        flags: { png: 'https://flagcdn.com/w320/pe.png', svg: 'https://flagcdn.com/pe.svg' },
        region: 'Americas',
        subregion: 'South America',
        currencies: { PEN: { name: 'Peruvian sol', symbol: 'S/.' } },
        languages: { spa: 'Spanish' },
        timezones: ['UTC-05:00']
      },
      {
        name: { common: 'México', official: 'United Mexican States' },
        capital: ['Mexico City'],
        population: 128932753,
        flags: { png: 'https://flagcdn.com/w320/mx.png', svg: 'https://flagcdn.com/mx.svg' },
        region: 'Americas',
        subregion: 'North America',
        currencies: { MXN: { name: 'Mexican peso', symbol: '$' } },
        languages: { spa: 'Spanish' },
        timezones: ['UTC-08:00', 'UTC-07:00', 'UTC-06:00']
      },
      {
        name: { common: 'España', official: 'Kingdom of Spain' },
        capital: ['Madrid'],
        population: 47351567,
        flags: { png: 'https://flagcdn.com/w320/es.png', svg: 'https://flagcdn.com/es.svg' },
        region: 'Europe',
        subregion: 'Southern Europe',
        currencies: { EUR: { name: 'Euro', symbol: '€' } },
        languages: { spa: 'Spanish' },
        timezones: ['UTC', 'UTC+01:00']
      },
      {
        name: { common: 'Colombia', official: 'Republic of Colombia' },
        capital: ['Bogotá'],
        population: 50882884,
        flags: { png: 'https://flagcdn.com/w320/co.png', svg: 'https://flagcdn.com/co.svg' },
        region: 'Americas',
        subregion: 'South America',
        currencies: { COP: { name: 'Colombian peso', symbol: '$' } },
        languages: { spa: 'Spanish' },
        timezones: ['UTC-05:00']
      },
      {
        name: { common: 'Argentina', official: 'Argentine Republic' },
        capital: ['Buenos Aires'],
        population: 45376763,
        flags: { png: 'https://flagcdn.com/w320/ar.png', svg: 'https://flagcdn.com/ar.svg' },
        region: 'Americas',
        subregion: 'South America',
        currencies: { ARS: { name: 'Argentine peso', symbol: '$' } },
        languages: { spa: 'Spanish' },
        timezones: ['UTC-03:00']
      }
    ];
    return of(mockData);
  }

  private getMockCountryByName(name: string): Observable<any> {
    const mockCountries: any = {
      'Perú': {
        name: { common: 'Perú', official: 'Republic of Peru' },
        capital: ['Lima'],
        population: 32971846,
        flags: { png: 'https://flagcdn.com/w320/pe.png', svg: 'https://flagcdn.com/pe.svg' },
        region: 'Americas',
        subregion: 'South America',
        currencies: { PEN: { name: 'Peruvian sol', symbol: 'S/.' } },
        languages: { spa: 'Spanish' },
        timezones: ['UTC-05:00']
      },
      'México': {
        name: { common: 'México', official: 'United Mexican States' },
        capital: ['Mexico City'],
        population: 128932753,
        flags: { png: 'https://flagcdn.com/w320/mx.png', svg: 'https://flagcdn.com/mx.svg' },
        region: 'Americas',
        subregion: 'North America',
        currencies: { MXN: { name: 'Mexican peso', symbol: '$' } },
        languages: { spa: 'Spanish' },
        timezones: ['UTC-08:00', 'UTC-07:00', 'UTC-06:00']
      },
      'España': {
        name: { common: 'España', official: 'Kingdom of Spain' },
        capital: ['Madrid'],
        population: 47351567,
        flags: { png: 'https://flagcdn.com/w320/es.png', svg: 'https://flagcdn.com/es.svg' },
        region: 'Europe',
        subregion: 'Southern Europe',
        currencies: { EUR: { name: 'Euro', symbol: '€' } },
        languages: { spa: 'Spanish' },
        timezones: ['UTC', 'UTC+01:00']
      }
    };

    const country = mockCountries[name] || {
      name: { common: name, official: `País ${name}` },
      capital: ['Capital no disponible'],
      population: 1000000,
      flags: { png: 'https://flagcdn.com/w320/un.png', svg: 'https://flagcdn.com/un.svg' },
      region: 'Desconocido',
      subregion: 'Desconocido',
      currencies: { USD: { name: 'Dólar', symbol: '$' } },
      languages: { eng: 'Inglés' },
      timezones: ['UTC']
    };

    return of([country]);
  }
}
