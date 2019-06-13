import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {


  mostrar = true;
  //list = [];
  //list: any[] = []
  list: {name: string, id: number}[] = [];

  constructor() { }

  ngOnInit() {
    //Se ejecuta cuando se ha inicializado los componentes, pero sin haber renderizado completamente
    for(let i = 0; i < 10; i++){
      this.list .push({
        name: 'Rafa ' + i,
        id: i,
      })
    }

  }

  ngOnDestroy(): void {
    //Cuando se abandona la pantalla al navegar a otra
  }

  isShow(item){
    return item.id %2;
  }

}
