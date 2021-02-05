import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { SigoTestModule } from '../../../test.module';
import { CompraDetailComponent } from 'app/entities/compra/compra-detail.component';
import { Compra } from 'app/shared/model/compra.model';

describe('Component Tests', () => {
  describe('Compra Management Detail Component', () => {
    let comp: CompraDetailComponent;
    let fixture: ComponentFixture<CompraDetailComponent>;
    const route = ({ data: of({ compra: new Compra(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SigoTestModule],
        declarations: [CompraDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(CompraDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(CompraDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load compra on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.compra).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
