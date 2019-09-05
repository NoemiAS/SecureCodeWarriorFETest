import { Component, OnInit } from '@angular/core';

import Languages from '../../../assets/data/programming_languages.json';

@Component({
  selector: 'app-languages-list',
  templateUrl: './languages-list.component.html',
  styleUrls: ['./languages-list.component.scss']
})
export class LanguagesListComponent implements OnInit {

  languages = Languages;
  searchText = '';

  constructor() {
    console.log('languages:', this.languages, this.languages.length);
  }

  ngOnInit() {
  }

}
