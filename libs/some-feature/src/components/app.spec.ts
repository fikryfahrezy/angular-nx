import { TestBed } from "@angular/core/testing";
import { SomeFeatureTitle } from "./some-feature-title";

describe("SomeFeatureTitle", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SomeFeatureTitle],
    }).compileComponents();
  });

  it("should render title", () => {
    const fixture = TestBed.createComponent(SomeFeatureTitle);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector("h1")?.textContent).toContain(
      "Some Feature Title",
    );
  });
});
