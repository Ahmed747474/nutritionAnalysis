import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnalysisResponce } from '../model/food';

@Injectable({
  providedIn: 'root',
})
export class AnalysisService {
  constructor(private http: HttpClient) {}

  analysisFood(food: string[]): Observable<AnalysisResponce> {
    return this.http.post<AnalysisResponce>('nutrition-details', {
      ingr: food,
    });
  }
  analysisSingleFood(food: string): Observable<AnalysisResponce> {
    return this.http.get<AnalysisResponce>('nutrition-data', {
      params: { ingr: food },
    });
  }
}
