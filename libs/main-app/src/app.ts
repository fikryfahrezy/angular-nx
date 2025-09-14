import { Component, ViewEncapsulation } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: "main-app-root",
  templateUrl: "./app.html",
  encapsulation: ViewEncapsulation.Emulated,
})
export class App {}
