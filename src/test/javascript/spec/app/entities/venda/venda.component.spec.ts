import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { SigoTestModule } from '../../../test.module';
import { VendaComponent } from 'app/entities/venda/venda.component';
import { VendaService } from 'app/entities/venda/venda.service';
import { Venda } from 'app/shared/model/venda.model';

describe('Component Tests', () => {
  describe('Venda Management Component', () => {
    let comp: VendaComponent;
    let fixture: ComponentFixture<VendaComponent>;
    let service: VendaService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SigoTestModule],
        declarations: [VendaComponent],
      })
        .overrideTemplate(VendaComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(VendaComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(VendaService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new Venda(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.vendas && comp.vendas[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
