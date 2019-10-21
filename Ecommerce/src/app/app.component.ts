import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Ecommerce Application';
  @Output() public sidenavToggle = new EventEmitter();
 
  constructor(
    @Inject(LOCAL_STORAGE) private storage: WebStorageService
  ) { }
  ngOnInit() {
    this.storage.remove('orderHistory');
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
