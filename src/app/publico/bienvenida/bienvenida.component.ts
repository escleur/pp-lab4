import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {
  datagh : any;

  constructor(private githubService: GithubService) {
    this.githubService.getInfo().subscribe( data =>{
      this.datagh = data;
    });
   }

  ngOnInit(): void {
  }

}
