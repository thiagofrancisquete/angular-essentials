import { Component, OnInit, DoCheck,
  OnChanges, OnDestroy, AfterContentInit,
  AfterContentChecked, AfterViewChecked,
  AfterViewInit, Input} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnChanges, OnInit, DoCheck,
OnDestroy, AfterContentInit, AfterContentChecked, AfterViewChecked,
AfterViewInit {

  @Input() valorInicial: number = 10;

  constructor() {
    this.log('constructor');
   }

   ngOnChanges() {
     // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
     this.log('ngOnChanges');
   }

   ngOnInit() {
    this.log('ngOnInit');
   }

  ngDoCheck() {
    // Called every time that the input properties of a component or a directive are checked.
    //  Use it to extend change detection by performing a custom check.
    this.log('ngDoCheck');
  }

  ngOnDestroy()  {
    // Called once, before the instance is destroyed.
    this.log('ngOnDestroy');
  }

  ngAfterContentInit() {
    // Called after ngOnInit when the component's or directive's content has been initialized.
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    // Called after every check of the component's or directive's content.
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    this.log('AfterViewInit');
  }

  ngAfterViewChecked() {
    // Called after every check of the component's view. Applies to components only.
    this.log('AfterViewChecked');
  }

  private log(hook: string) {
    console.log(hook);
  }

}
