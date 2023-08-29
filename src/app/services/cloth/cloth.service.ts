import { Injectable } from '@angular/core';
import { Cloth } from 'src/app/shared/models/cloth';

@Injectable({
  providedIn: 'root'
})
export class ClothService {

  getClothById(id:number): Cloth{
    return this.getAll().find(cloth => cloth.id == id)!;
  }
  constructor() { }

  getAll(): Cloth[]{
    return[
      {
        id: 1,
        name: 'Falomo T-shirt',
        imageUrl: '/assets/Frame.svg',
        origins: ['Nigeria'],
        price: 55,
      },
      {
        id: 2,
        name: 'Falomo T-shirt',
        imageUrl: '/assets/Frame.svg',
        origins: ['Nigeria'],
        price: 55,
      },
      {
        id: 3,
        name: 'Falomo T-shirt',
        imageUrl: '/assets/Frame.svg',
        origins: ['Nigeria'],
        price: 55,
      },
    ]
  }
}
