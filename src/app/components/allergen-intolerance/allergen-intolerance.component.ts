import {Component, Input, OnInit} from '@angular/core';
import {AllergenIntoleranceModel} from '../../models/allergen-intolerance.model';

@Component({
  selector: 'app-allergen-intolerance',
  templateUrl: './allergen-intolerance.component.html',
  styleUrls: ['./allergen-intolerance.component.css']
})
export class AllergenIntoleranceComponent implements OnInit {

  @Input() allergenIntolernce: AllergenIntoleranceModel;

  constructor() { }

  ngOnInit(): void {
  }

}
