import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-aplication',
  templateUrl: './index-aplication.component.html',
  styleUrls: ['./index-aplication.component.css']
})
export class IndexAplicationComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit() {
  }

  eventMouseover(parameter: string) {
    document.getElementById(parameter).className = 'show';
  }

  eventMouseleave(parameter: string) {
    document.getElementById(parameter).className = 'hide';
  }

  eventClick(parameter: string){
    alert(parameter)
  }
 goToProduct(){
 this.route.navigate(['productos']);
 
 } 

 
}
