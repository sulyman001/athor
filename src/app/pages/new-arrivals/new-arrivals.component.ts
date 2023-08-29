import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClothService } from 'src/app/services/cloth/cloth.service';
import { Cloth } from 'src/app/shared/models/cloth';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.scss']
})
export class NewArrivalsComponent{

  cloths: Cloth[] = [];
  constructor(private clothService:ClothService, private route:ActivatedRoute){}
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void{
    this.getAllCloth();
  }

  getAllCloth(): void{
    this.cloths = this.clothService.getAll()
    console.log(this.cloths);
  }
}
