import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IncidentService {
  private readonly _routeURL = environment.BASE_URL;
  _searchText = new BehaviorSubject<string>('');

  constructor(private readonly _http: HttpClient) {}

  get searchText$() {
    return this._searchText.asObservable();
  }

  addSearchText(data: string) {
    this._searchText.next(data);
  }

  getChatByIncident(incidentId: string): Observable<any> {
    const response = [
      {
        type: 'client',
        name: 'Raul Gomez',
        message: `Hola, <br>El cliente me ha pedido un paquete de regalo de ultimo <br>minuto, <br>Estan a tiempo?`,
        img: 'assets/client.png',
      },
      {
        type: 'company',
        name: 'Equipo Fulfio',
        message: `Hola Raul, <br>No te preocupes, el paquete aun no ha salido, rectificamos <br>el pedido sin problemas`,
        img: 'assets/fulfio-logo.png',
      },
      {
        type: 'client',
        name: 'Raul Gomez',
        message: `Muchas gracias!`,
        img: 'assets/client.png',
      },
    ];
    return of(response);
  }

  getIncidentList(): Observable<any> {
    return this._http.get(`${this._routeURL}incidents`).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  postAddIncident(data: any): Observable<any> {
    return this._http
      .post(`${this._routeURL}incidents/create`, data)
      .pipe(map((response: any) => response));
  }

  patchEditProduct(data: any): Observable<any> {
    return this._http
      .patch(`${this._routeURL}incidents/resolved`, data)
      .pipe(map((resp: any) => resp));
  }
}
