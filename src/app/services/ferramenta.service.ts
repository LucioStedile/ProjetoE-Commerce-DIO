import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ferramenta } from '../models/ferramentaInter';

@Injectable({
  providedIn: 'root'
})
export class FerramentaService {
  apiUrl = 'https://sheet.best/api/sheets/37825146-49ad-4ce3-9bb8-707242dbb1ba'
  constructor(private httpClient: HttpClient) { }

  getFerramentas():Observable<Ferramenta[]>{
    return this.httpClient.get<Ferramenta[]>(this.apiUrl);
  }
}
