import {
  Component,
  ElementRef,
  OnInit,
  ContentChild,
  AfterContentInit,
} from '@angular/core';

@Component({
  selector: 'app-template-access',
  templateUrl: './template-access.component.html',
  styleUrls: ['./template-access.component.scss'],
})
export class TemplateAccessComponent implements OnInit, AfterContentInit {
  @ContentChild('paragrafo', { static: true }) paragrafo!: ElementRef;

  constructor() {}
  ngAfterContentInit(): void {
    console.log(
      'Content Paragráfo: ',
      this.paragrafo.nativeElement.textContent
    );
  }

  ngOnInit(): void {
    console.log(
      'Content Paragráfo: ',
      this.paragrafo.nativeElement.textContent
    );
  }
}
