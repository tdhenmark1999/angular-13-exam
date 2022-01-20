import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sample } from '../models/sample.model';

const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
const baseUrlSearch = 'https://jsonplaceholder.typicode.com/comments';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Sample[]> {
    return this.http.get<Sample[]>(baseUrl);
  }

  get(id: any): Observable<Sample> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  findByPostId(postId: any): Observable<Sample[]> {
    return this.http.get<Sample[]>(`${baseUrlSearch}?postId=${postId}`);
  }
}
