import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../app.constants';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  appTitleVersion = AppConstants.APP_TITLE_VERSION;
  authorName = AppConstants.AUTHOR_NAME;

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
  }

  get lang() {
    return this.translateService.currentLang;
  }
}
