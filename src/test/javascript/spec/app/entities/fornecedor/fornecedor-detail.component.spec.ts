import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { SigoTestModule } from '../../../test.module';
import { FornecedorDetailComponent } from 'app/entities/fornecedor/fornecedor-detail.component';
import { Fornecedor } from 'app/shared/model/fornecedor.model';

describe('Component Tests', () => {
  describe('Fornecedor Management Detail Component', () => {
    let comp: FornecedorDetailComponent;
    let fixture: ComponentFixture<FornecedorDetailComponent>;
    const route = ({ data: of({ fornecedor: new Fornecedor(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SigoTestModule],
        declarations: [FornecedorDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(FornecedorDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(FornecedorDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load fornecedor on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.fornecedor).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
