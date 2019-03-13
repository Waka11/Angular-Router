import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsItemComponent } from './docs-item.component';

describe('DocsItemComponent', () => {
  let component: DocsItemComponent;
  let fixture: ComponentFixture<DocsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
