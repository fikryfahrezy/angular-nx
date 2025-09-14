import { Component } from "@angular/core";
import { SomeFeatureTitle } from "@org/some-feature";

@Component({
  selector: "main-app-some-feature-page",
  templateUrl: "./index.html",
  imports: [SomeFeatureTitle],
  standalone: true,
})
export class SomeFeaturePage {}
