import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss'],
})
export class LifeCycleComponent
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
  @Input() value: string = '';

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('%c OnChanges Life', 'color: #bada55', changes);
  }

  ngOnInit(): void {
    console.log('%c OnInit Life', 'color: #bada55');
  }

  ngDoCheck(): void {
    console.log('%c DoCheck Life', 'color: #bada55');
  }

  ngAfterContentInit(): void {
    console.log('%c AfterContentInit Life', 'color: #bada55');
  }

  ngAfterContentChecked(): void {
    console.log('%c AfterContentChecked Life', 'color: #bada55');
  }

  ngAfterViewInit(): void {
    console.log('%c AfterViewInit Life', 'color: #bada55');
  }

  ngAfterViewChecked(): void {
    console.log('%c AfterViewChecked Life', 'color: #bada55');
  }

  ngOnDestroy(): void {
    console.log('%c OnDestroy Life', 'color: #bada55');
  }
}
