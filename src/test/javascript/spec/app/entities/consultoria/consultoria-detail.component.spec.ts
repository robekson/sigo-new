import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { SigoTestModule } from '../../../test.module';
import { ConsultoriaDetailComponent } from 'app/entities/consultoria/consultoria-detail.component';
import { Consultoria } from 'app/shared/model/consultoria.model';

describe('Component Tests', () => {
  describe('Consultoria Management Detail Component', () => {
    let comp: ConsultoriaDetailComponent;
    let fixture: ComponentFixture<ConsultoriaDetailComponent>;
    const route = ({ data: of({ consultoria: new Consultoria(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SigoTestModule],
        declarations: [ConsultoriaDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(ConsultoriaDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(ConsultoriaDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load consultoria on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.consultoria).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
