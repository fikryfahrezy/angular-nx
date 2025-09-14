import "@angular/compiler";
import "@analogjs/vitest-angular/setup-snapshots";

import { provideZonelessChangeDetection, NgModule } from "@angular/core";
import {
  BrowserTestingModule,
  platformBrowserTesting,
} from "@angular/platform-browser/testing";
import { getTestBed } from "@angular/core/testing";
import { RouterModule } from "@angular/router";

@NgModule({
  providers: [provideZonelessChangeDetection()],
})
export class ZonelessTestModule {}

@NgModule({
  imports: [RouterModule],
})
export class RoutesModule {}

getTestBed().initTestEnvironment(
  [BrowserTestingModule, ZonelessTestModule, RoutesModule],
  platformBrowserTesting(),
);
