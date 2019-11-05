import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() productCount;
  @Output() public sidenavToggle = new EventEmitter();
 
  constructor() { }
 
  ngOnInit() {
    console.log('count : ',this.productCount);
  }
  ngOnChanges() {
    console.log('count changed : ',this.productCount);
  }
 
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
 
}