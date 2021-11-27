import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pais, PaisSmall } from '../interfaces/pais';
import { combineLatest, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  continentes: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

  baseUrl: string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }

  getPaises(continente: string): Observable<Pais[]> {
    return this.http.get<Pais[]>(`${this.baseUrl}/region/${continente}?fields=name,cca2`)
  }

  getBordersConCca2(cca2: string): Observable<Pais> {
    return this.http.get<Pais>(`${this.baseUrl}/alpha/${cca2}?fields=borders`)
  }

  getPaisSmallPorCca2(cca2: string) {
    const url = `${this.baseUrl}/alpha/${cca2}?fields=name,cca2`
    return this.http.get<PaisSmall>(url)
  }

  getPaisesFronteras(borders: string[]): Observable<PaisSmall[]> {
    if (!borders) {
      return of([]);
    }
    const peticiones: Observable<PaisSmall>[] = []
    borders.forEach(cca2 => {
      const peticion = this.getPaisSmallPorCca2(cca2)
      peticiones.push(peticion)
    })
    return combineLatest(peticiones)
  }
}
