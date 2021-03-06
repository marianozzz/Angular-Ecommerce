import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService} from 'src/app/services/client-service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  userId: number;
  userTypeId: number;
  name: string;
  email: string;
  password: string;
  message: string;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
  }

  addClient(){
    let client = new Client();
    client.name = this.name;
    client.email = this.email;
    client.userId = this.userTypeId;
    client.password = this.password;

    this.clientService.add(client);

    this.message = '<div class="form-control alert alert-success"> Client successfully added </div>';
  }

}
