import { AppConstants } from '../app.constants';
import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  title = AppConstants.APP_TITLE_VERSION;
  ngVersion = AppConstants.ANGULAR_VERSION;
  bootstrapVersion = AppConstants.BOOTSTRAP_VERSION;

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
  }

  get lang() {
    return this.translateService.currentLang;
  }
}
