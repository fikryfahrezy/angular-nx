import { type Routes } from "@angular/router";

export const appRoutes: Routes = [
  {
    path: "",
    title: "Home Page",
    async loadComponent() {
      return import("./pages/home").then((c) => {
        return c.HomePage;
      });
    },
  },
  {
    path: "some-feature",
    title: "Some Feature Page",
    async loadComponent() {
      return import("./pages/some-feature").then((c) => {
        return c.SomeFeaturePage;
      });
    },
  },
];
