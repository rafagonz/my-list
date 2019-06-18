import { Component, OnInit, OnDestroy } from '@angular/core';
import { IsodatePipe } from '../isodate.pipe';
import { ListService } from '../list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {


  mostrar = true;
  //list = [];
  //list: any[] = []
  list: {name: string, id: number, date: Date}[] = [];

  constructor(private isoDate: IsodatePipe, private listService: ListService) {

  }

  ngOnInit() {
    //Se ejecuta cuando se ha inicializado los componentes, pero sin haber renderizado completamente
    this.list = this.listService.getList();

  }

  ngOnDestroy(): void {
    //Cuando se abandona la pantalla al navegar a otra
  }

  isShow(item){
    return item.id %2;
  }

  transformDate(date: Date){
    console.log('pase por aqui');
    return this.isoDate.transform(date);
  }

  order(param){
    //this.list = this.list.sort( compareFn: (prev, next) => prev[param] - next[next]);
    console.log(param);
  }
}
