import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfStuffComponent } from './pdf-stuff.component';

describe('PdfStuffComponent', () => {
  let component: PdfStuffComponent;
  let fixture: ComponentFixture<PdfStuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfStuffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
