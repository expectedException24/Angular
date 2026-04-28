import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Contatto {
  id?: number;
  nome: string;
  cognome: string;
  telefono: string;
  mail: string;
}

@Injectable({
  providedIn: 'root'
})
export class RubricaService {
  private apiUrl = 'https://crudcrud.com/api/3abf6257e7234a818765cb4b5fdc8c6f/rubrica'; 

  constructor(private http: HttpClient) { }

  getContatti(): Observable<Contatto[]> {
    return this.http.get<Contatto[]>(this.apiUrl)
  }

  getContattoById(id: number): Observable<Contatto> {
    return this.http.get<Contatto>(`${this.apiUrl}/${id}`)
  }

  creaContatto(contatto: Contatto): Observable<Contatto> {
    return this.http.post<Contatto>(this.apiUrl, contatto)
  }

  aggiornaContatto(id: number, contatto: Contatto): Observable<Contatto> {
    return this.http.put<Contatto>(`${this.apiUrl}/${id}`, contatto)
  }

  eliminaContatto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }

}
