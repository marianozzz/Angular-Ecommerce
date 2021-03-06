import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientService} from 'src/app/services/client-service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
   client: Client = new Client();

  constructor(private clientService: ClientService, private route: ActivatedRoute) { }

  ngOnInit(): void {

       this.clientService.getById(this.client.userId).then(response => {
       this.client = response;
    })
      .catch(error => { });
  /*  let clientId = Number(this.route.snapshot.paramMap.get('id'));
    this.client = this.clientService.getById(clientId);*/
  }

}
