import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-layout-responsivo',
  templateUrl: './layout-responsivo.component.html',
  styleUrls: ['./layout-responsivo.component.scss'],
})
export class LayoutResponsivoComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('%c OnChanges Layout', 'color: #51a', changes);
  }

  ngOnInit(): void {
    console.log('%c OnInit Layout', 'color: #51a');
  }

  ngDoCheck(): void {
    console.log('%c DoCheck Layout', 'color: #51a');
  }

  ngAfterContentInit(): void {
    console.log('%c AfterContentInit Layout', 'color: #51a');
  }

  ngAfterContentChecked(): void {
    console.log('%c AfterContentChecked Layout', 'color: #51a');
  }

  ngAfterViewInit(): void {
    console.log('%c AfterViewInit Layout', 'color: #51a');
  }

  ngAfterViewChecked(): void {
    console.log('%c AfterViewChecked Layout', 'color: #51a');
  }

  ngOnDestroy(): void {
    console.log('%c OnDestroy Layout', 'color: #51a');
  }
}
