import { Component, Input } from '@angular/core';
import { DivisasService } from '../../shared/services/divisas.service';
@Component({
  selector: 'app-valores',
  templateUrl: './valores.component.html',
  styleUrls: ['./valores.component.scss'],
})
export class ValoresComponent {
  constructor(private DivisasService: DivisasService) {}

  datos: any;
  divisas: any;
  seleccionada: any;

  public message: string = '';
  @Input() public cantidad!: any;
  public setMessage(message: string): void {

    this.message = message;
    console.log(message);
    
    this.DivisasService.getProductsWithDivisa(message[0]).subscribe((res) => {
      this.datos = res;
      this.divisas = Object.entries(this.datos.rates);
      this.seleccionada=this.datos.base;
    });
  }

  ngOnInit() {
    this.DivisasService.getProducts().subscribe((res) => {
      this.datos = res;
      this.divisas = Object.entries(this.datos.rates);
      this.seleccionada=this.datos.base;
    });
  }
}
