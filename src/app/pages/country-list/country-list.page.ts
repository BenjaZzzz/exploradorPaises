import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.page.html',
  styleUrls: ['./country-list.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule]
})
export class CountryListPage implements OnInit {
  countries: any[] = [];
  searchTerm: string = '';
  errorMessage: string = '';
  loading = true;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadCountries();
  }

  loadCountries() {
    this.loading = true;
    this.errorMessage = '';

    this.apiService.getAllCountries().subscribe({
      next: (data) => {
        this.countries = data;
        this.countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading countries:', error);
        this.errorMessage = 'Error al cargar los países. Intenta nuevamente.';
        this.loading = false;

        // Datos de ejemplo para desarrollo
        this.countries = [
          {
            name: { common: 'Perú', official: 'Republic of Peru' },
            capital: ['Lima'],
            population: 32971846,
            flags: { png: 'https://flagcdn.com/w320/pe.png' }
          },
          {
            name: { common: 'México', official: 'United Mexican States' },
            capital: ['Mexico City'],
            population: 128932753,
            flags: { png: 'https://flagcdn.com/w320/mx.png' }
          }
        ];
      }
    });
  }

  get filteredCountries() {
    return this.countries.filter(country =>
      country.name.common.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
