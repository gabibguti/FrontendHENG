import { TestBed, async } from '@angular/core/testing';
import { ApiserviceComponent } from './apiservice.component';
describe('ApiserviceComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ApiserviceComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(ApiserviceComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'FrontendHENG'`, async(() => {
    const fixture = TestBed.createComponent(ApiserviceComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('FrontendHENG');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(ApiserviceComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to FrontendHENG!');
  }));
});
