import { Moment } from 'moment';
import { IProduto } from 'app/shared/model/produto.model';

export interface ICompra {
  id?: number;
  quantidade?: number;
  data?: Moment;
  tamanho?: string;
  valor?: number;
  produtos?: IProduto[];
  clienteId?: number;
  clienteCnpj?: string;
}

export class Compra implements ICompra {
  constructor(
    public id?: number,
    public quantidade?: number,
    public data?: Moment,
    public tamanho?: string,
    public valor?: number,
    public produtos?: IProduto[],
    public clienteId?: number,
    public clienteCnpj?: string
  ) {}
}
