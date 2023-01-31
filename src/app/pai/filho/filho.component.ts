import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.scss'],
})
export class FilhoComponent implements OnInit {
  @Output() listaNomes = new EventEmitter<string[]>();

  nomes: string[] = [
    'Leannon',
    'Schinner',
    'Satterfield',
    'Schmeler'
  ];

  constructor() {}

  ngOnInit(): void {
    this.listaNomes.emit(this.nomes);
  }
}
