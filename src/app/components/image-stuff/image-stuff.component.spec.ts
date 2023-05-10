import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageStuffComponent } from './image-stuff.component';

describe('ImageStuffComponent', () => {
  let component: ImageStuffComponent;
  let fixture: ComponentFixture<ImageStuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageStuffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
