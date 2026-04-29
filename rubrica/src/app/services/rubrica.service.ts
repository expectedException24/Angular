import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Contatto {
  _id?: string;
  nome: string;
  cognome: string;
  telefono: string;
  mail: string;
}

@Injectable({
  providedIn: 'root'
})
export class RubricaService {
  private apiUrl = 'https://crudcrud.com/api/cb41774dc289470b92e63d8568cd5299/rubrica'; 

  constructor(private http: HttpClient) { }

  getContatti(): Observable<Contatto[]> {
    return this.http.get<Contatto[]>(this.apiUrl)
  }

  getContattoById(id: string): Observable<Contatto> {
    return this.http.get<Contatto>(`${this.apiUrl}/${id}`)
  }

  creaContatto(contatto: Contatto): Observable<Contatto> {
    return this.http.post<Contatto>(this.apiUrl, contatto)
  }

  aggiornaContatto(id: string, contatto: Contatto): Observable<Contatto> {
    return this.http.put<Contatto>(`${this.apiUrl}/${id}`, contatto)
  }

  eliminaContatto(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }

}
