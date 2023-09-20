import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-bpm-layout',
  templateUrl: './bpm-layout.component.html',
  styleUrls: ['./bpm-layout.component.scss']
})
export class BpmLayoutComponent implements OnInit {

  @HostBinding('class.active') isMenuOpen: boolean = true;

  constructor() { }

  public toggle() {
    this.isMenuOpen = !this.isMenuOpen; 
  }

  ngOnInit(): void {
  }

}
