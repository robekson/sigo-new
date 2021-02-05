import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { VendaService } from 'app/entities/venda/venda.service';
import { IVenda, Venda } from 'app/shared/model/venda.model';

describe('Service Tests', () => {
  describe('Venda Service', () => {
    let injector: TestBed;
    let service: VendaService;
    let httpMock: HttpTestingController;
    let elemDefault: IVenda;
    let expectedResult: IVenda | IVenda[] | boolean | null;
    let currentDate: moment.Moment;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(VendaService);
      httpMock = injector.get(HttpTestingController);
      currentDate = moment();

      elemDefault = new Venda(0, 0, currentDate, currentDate, 0);
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign(
          {
            data: currentDate.format(DATE_FORMAT),
            dataEntrega: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a Venda', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
            data: currentDate.format(DATE_FORMAT),
            dataEntrega: currentDate.format(DATE_FORMAT),
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            data: currentDate,
            dataEntrega: currentDate,
          },
          returnedFromService
        );

        service.create(new Venda()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a Venda', () => {
        const returnedFromService = Object.assign(
          {
            quantidade: 1,
            data: currentDate.format(DATE_FORMAT),
            dataEntrega: currentDate.format(DATE_FORMAT),
            valor: 1,
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            data: currentDate,
            dataEntrega: currentDate,
          },
          returnedFromService
        );

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of Venda', () => {
        const returnedFromService = Object.assign(
          {
            quantidade: 1,
            data: currentDate.format(DATE_FORMAT),
            dataEntrega: currentDate.format(DATE_FORMAT),
            valor: 1,
          },
          elemDefault
        );

        const expected = Object.assign(
          {
            data: currentDate,
            dataEntrega: currentDate,
          },
          returnedFromService
        );

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a Venda', () => {
        service.delete(123).subscribe(resp => (expectedResult = resp.ok));

        const req = httpMock.expectOne({ method: 'DELETE' });
        req.flush({ status: 200 });
        expect(expectedResult);
      });
    });

    afterEach(() => {
      httpMock.verify();
    });
  });
});
