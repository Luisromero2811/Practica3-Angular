import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-routetring',
  templateUrl: './routetring.component.html',
  styleUrls: ['./routetring.component.css']
})

export class RoutetringComponent implements OnInit {
  hola="hola";
  constructor(public route:ActivatedRoute) { 
    console.log(this.route.snapshot.paramMap.get('hola'));
  }

  ngOnInit(): void {
    this.hola = this.route.snapshot.paramMap.get('string')
  }

}
