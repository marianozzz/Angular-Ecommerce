import { Injectable } from '@angular/core';
import {Client} from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  private clientList = new Array<Client>();
  private clientId = 0;
  constructor() { }

  add(client:Client)
  {
    this.clientId++;
    client.userId = this.clientId;
    this.clientList.push(client);
  }

  getAll()
  {
    return this.clientList;
  }

  getById(clientId: number)
  {
    let clients = this.clientList.filter(client =>{
      return client.userId == clientId;
    });

    return(clients.length > 0) ? clients[0] : null ;
  }
}
//https://www.youtube.com/watch?v=dkmnb4k6p98&t=199s

//https://www.youtube.com/watch?v=dkmnb4k6p98&t=57s video 10
//https://www.youtube.com/watch?v=OICGDeBieF0&t=50s video 12