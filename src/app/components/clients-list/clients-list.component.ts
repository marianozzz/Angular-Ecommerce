import { Component, OnInit } from '@angular/core';
import {Client} from '../../models/client';
import { ClientServiceService } from 'src/app/services/client-service.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  clientArray: Array <Client> = [];

constructor(private clientService: ClientServiceService) { }

ngOnInit(): void {
  this.clientArray = this.clientService.getAll();
}
/*
addOrEdit()
{
  this.selectedClient.userId = this.clientArray.length + 1;
  this.clientArray.push(this.selectedClient);
  this.selectedClient = new Client();
}*/


}
