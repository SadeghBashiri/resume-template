import { VERSION } from '@angular/core';

declare const bootstrap: any; // global reference

/**
 * Application constants
 */
export class AppConstants {

  public static DATE = '2025-04-17';
  public static APP_TITLE = 'CV';
  public static AUTHOR_NAME = 'Sadegh Bashiri---';
  public static APP_TITLE_VERSION: string = AppConstants.APP_TITLE + ' - ' + AppConstants.DATE;

  public static ANGULAR_VERSION = 'Ng ' + VERSION.full;
  public static BOOTSTRAP_VERSION = bootstrap.Tooltip.VERSION;

}
