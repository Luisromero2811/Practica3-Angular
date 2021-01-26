import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-routejson',
  templateUrl: './routejson.component.html',
  styleUrls: ['./routejson.component.css']
})
export class RoutejsonComponent implements OnInit {
  equipo: {pais: string, nombre: string};
  constructor() { }

  ngOnInit(): void {
  }

}
