// src/app/pages/country-detail/country-detail.page.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.page.html',
  styleUrls: ['./country-detail.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class CountryDetailPage implements OnInit {
  country: any;
  loading = true;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    const countryName = this.route.snapshot.paramMap.get('name');
    if (countryName) {
      this.loadCountryDetails(countryName);
    }
  }

  loadCountryDetails(name: string) {
    this.loading = true;
    this.errorMessage = '';

    this.apiService.getCountryByName(name).subscribe({
      next: (data) => {
        this.country = data[0];
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading country details:', error);
        this.errorMessage = 'Error al cargar los detalles del país.';
        this.loading = false;

        // Datos de ejemplo
        this.country = {
          name: { common: name, official: `${name} Official` },
          capital: ['Capital'],
          population: 1000000,
          flags: { png: 'https://flagcdn.com/w320/un.png' },
          region: 'Region',
          subregion: 'Subregion',
          currencies: { XXX: { name: 'Currency', symbol: '$' } },
          languages: { eng: 'English' },
          timezones: ['UTC+00:00']
        };
      }
    });
  }

  getCurrency(currencies: any): string {
    if (!currencies) return 'N/A';
    const currency = Object.values(currencies)[0] as any;
    return `${currency.name} (${currency.symbol || 'N/A'})`;
  }

  getLanguages(languages: any): string {
    if (!languages) return 'N/A';
    return Object.values(languages).join(', ');
  }
}
