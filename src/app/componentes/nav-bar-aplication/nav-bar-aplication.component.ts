import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchFilterService } from '../../services/shared/search-filter/search-filter.service';

@Component({
  selector: 'app-nav-bar-aplication',
  templateUrl: './nav-bar-aplication.component.html',
  styleUrls: ['./nav-bar-aplication.component.css']
})
export class NavBarAplicationComponent implements OnInit {

  public wordsearch : string  = '';
  public saveWordSearch : string = '';
  constructor(private searchFilterService: SearchFilterService) { }

  ngOnInit() {
  }

  

  buscarDrone(){
    this.saveWordSearch = this.wordsearch;
    
  }

  searchDrone(SearchesObjectComponent){
    this.searchFilterService.setDataFilter(this.wordsearch)
  }


 
}
