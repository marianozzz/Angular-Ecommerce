import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import {Client} from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

 // private clientList = new Array<Client>();
 // private clientId = 0;
  private apiURL = 'https://utn-avanzada2-tp-final.herokuapp.com/api/';
  constructor(private https: HttpClient) { }
/* Agregar cliente */

  add(client: Client)
  {
   const httpOpcions = {
     headers: new HttpHeaders({
       'Content-type': 'application/json'
     })
   };
   return this.https.post(this.apiURL, client, httpOpcions);
  }


/* Mostrar todos con Observable y con Promise */
 /* getAll(): Observable<Client[]>
  {
    return this.https.get<Client[]>(this.apiURL);
  }*/

  getAll(): Promise<any>{
    return this.https.get(this.apiURL + 'User/').toPromise();
  }

/* Mostrar por ID */
  getById(userId: number): Promise<any>
  {
     /*let clients = this.clientList.filter(client => {
      return client.userId === clientId;
    });
     return(clients.length > 0) ? clients[0] : null ;*/

    return this.https.get(this.apiURL + 'UserType/' + userId).toPromise();
  }
}
