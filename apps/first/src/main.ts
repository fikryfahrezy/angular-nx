import { bootstrapApplication } from "@angular/platform-browser";
import { App, appConfig } from "@org/main-app";

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
