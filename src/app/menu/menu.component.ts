import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  routes = [
    { path: '/home', description: 'home' },
    { path: '/observable', description: 'observable / promise' },
    { path: '/form', description: 'formulário' },
  ];

  nomes = [
    'mateus',
    'victor',
    'serginho',
    'marlei',
    'felipe',
    'nicoly',
    'jean',
    'henry',
    'tiara',
    'heloisa',
  ];

  constructor() {}

  ngOnInit() {
    for (let i = 0; i <= 10; i++) {
      console.log(this.nomes[i]);
    }
  }
}
