import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    const dialogComponent = jasmine.createSpyObj('DialogComponent', [
      'openDialog',
    ]);

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [{ provide: DialogComponent, useValue: dialogComponent }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it(`should have as title 'bank-assignment'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('bank-assignment');
  });
  it(`should render 3 buttons'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(
      fixture.nativeElement.querySelectorAll('.button-container').length
    ).toEqual(3);
  });
});
