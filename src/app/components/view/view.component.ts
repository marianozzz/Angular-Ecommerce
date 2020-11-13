import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientServiceService} from 'src/app/services/client-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
   client: Client = new Client();
  
  constructor(private clientService: ClientServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let clientId = Number(this.route.snapshot.paramMap.get('id'));
    this.client = this.clientService.getById(clientId);
  }

}
