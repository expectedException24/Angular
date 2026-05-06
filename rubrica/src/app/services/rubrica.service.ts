import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Contatto {
  id?: string;
  nome: string;
  cognome: string;
  telefono: string;
  mail: string;
}

@Injectable({
  providedIn: 'root'
})
export class RubricaService {
  private apiUrl = 'https://ca3c859242e65371cf3b.free.beeceptor.com/contatti'; 

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
