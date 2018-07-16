import { Component, OnInit } from '@angular/core';
import { DroneService } from '../../services/drone.service';
import { Router } from '@angular/router';
import { SearchFilterService } from '../../services/shared/search-filter/search-filter.service';

@Component({
  selector: 'app-body-aplication',
  templateUrl: './body-aplication.component.html',
  styleUrls: ['./body-aplication.component.css']
})
export class BodyAplicationComponent implements OnInit {

  public objectProducts: any[] = [];
  public objectProductsSave: any[] = [];

  constructor(private droneServivce: DroneService,
    private router: Router,
    private searchFilterService: SearchFilterService) {

    this.searchFilterService.getDataFilter()
      .subscribe((data: any) => {
        let newObject: any;

        this.objectProducts = this.objectProductsSave.filter((object) => 
          object.name.toUpperCase().indexOf(data.toUpperCase()) >= 0);

          console.log(this.objectProducts)
          console.log(this.objectProductsSave)
      });
  }

  eventClick(parameter: string) {
    alert(parameter)
  }

  ngOnInit() {
    this.droneServivce.getProductsDrones().subscribe((data: any) => {
      this.objectProducts = data;
      this.objectProductsSave = data;
      console.log(this.objectProducts)
          console.log(this.objectProductsSave)
    });

  }

  goToDescription(idx: number) {
    this.router.navigate(['description']);


  }


}
