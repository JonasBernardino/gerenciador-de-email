import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientFull } from '../model/client.model';
import { ClientService } from '../services/client/client.service';

@Component({
  selector: 'app-open-client',
  templateUrl: './open-client.component.html',
  styleUrls: ['./open-client.component.css'],
})
export class OpenClientComponent implements OnInit {
  client: ClientFull ={
    subscription: "",
    name: "",
    nickname: "",
    status: "ENABLE",
    emails: [
      {
        category: {
          name: ""
        },
        name: "",
        email: ""
      }
    ],
  
  }

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute
  ) {}

  id = this.route.snapshot.paramMap.get('id');
  name:string =''
  ngOnInit(): void {
    this.getClient();
  }

  getClient() {
    this.clientService.readClientId(this.id).subscribe((result) => {
      this.name = result.name
      this.client = result
     

    });
  }
}
