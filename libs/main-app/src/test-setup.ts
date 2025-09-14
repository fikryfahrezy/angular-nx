import "@angular/compiler";
import "@analogjs/vitest-angular/setup-snapshots";

import { provideZonelessChangeDetection, NgModule } from "@angular/core";
import {
  BrowserTestingModule,
  platformBrowserTesting,
} from "@angular/platform-browser/testing";
import { getTestBed } from "@angular/core/testing";
import { provideRouter, RouterModule } from "@angular/router";

import { appRoutes } from "./app.routes";

@NgModule({
  providers: [provideZonelessChangeDetection()],
})
export class ZonelessTestModule {}

@NgModule({
  providers: [provideRouter(appRoutes)],
  imports: [RouterModule],
})
export class RoutesModule {}

getTestBed().initTestEnvironment(
  [BrowserTestingModule, ZonelessTestModule, RoutesModule],
  platformBrowserTesting(),
);
