import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Data } from '@angular/router'
import { WordAdapter, Word } from '../models/word'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient, private wordAdapter: WordAdapter) { }

  convertWord(data: Data): Observable<Word> {
    return this.httpClient
      .post<any>('http://localhost:3000/api/convert', data)
      .pipe(map(resp => this.wordAdapter.adapt(resp)))
  }
}