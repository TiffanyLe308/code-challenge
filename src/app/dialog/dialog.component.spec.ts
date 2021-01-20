import { TestBed } from '@angular/core/testing';

import { DialogComponent } from './dialog.component';

describe('DialogComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogComponent],
    }).compileComponents();
  });
  it(`should have a dialog with header, content, footer and 2 buttons'`, () => {
    const fixture = TestBed.createComponent(DialogComponent);
    expect(fixture.nativeElement.querySelectorAll('.header').length).toEqual(1);
    expect(fixture.nativeElement.querySelectorAll('.content').length).toEqual(
      1
    );
    expect(fixture.nativeElement.querySelectorAll('.footer').length).toEqual(1);
    expect(fixture.nativeElement.querySelectorAll('.btn').length).toEqual(2);
  });
});
