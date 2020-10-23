import { Component, OnInit } from '@angular/core';
import {Client} from '../../models/client';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  clientArray: Client[] =
 [{
    userId: 1,
    userTypeId: 1,
    name: 'Jhon',
    email: 'jhonDoe@gmail.com',
    password: '123',
  }];
selectedClient: Client = new Client();

addOrEdit()
{
  this.selectedClient.userId = this.clientArray.length + 1;
  this.clientArray.push(this.selectedClient);
  this.selectedClient = new Client();
}
  constructor() { }

  ngOnInit(): void {
  }

}
