import { Component } from '@angular/core';
import {Currency} from '../../shared/interfaces/interfaces'


@Component({
  selector: 'app-calculator-left',
  templateUrl: './calculator-left.component.html',
  styleUrls: ['./calculator-left.component.scss']
})


export class CalculatorLeftComponent {
  currency?: Currency[] = [
    {value: 'TUSD',viewValue:'TUSD (Test US Dollar'},
    {value: 'TEUR',viewValue:'TEUR (Test Euro)'},
    {value: 'TCNY',viewValue:'TCNY (Test Chinese Yuan)'},
    {value: 'TINR',viewValue:'TINR (Test Indian Rupee)'},
    {value: 'TBRL',viewValue:'TBRL (Test Brazilian Real)'},
    {value: 'TIDR',viewValue:'TIDR (Test Indonesian Rupiah)'},
    {value: 'TUSD',viewValue:'TUSD (Test US Dollar)'},
    {value: 'TEUR',viewValue:'TEUR (Test Euro)'},
    {value: 'TCNY',viewValue:'TCNY (Test Chinese Yuan)'},
    {value: 'TINR',viewValue:'TINR (Test Indian Rupee)'},
    {value: 'TBRL',viewValue:'TBRL (Test Brazilian Real)'},
    {value: 'TIDR',viewValue:'TIDR (Test Indonesian Rupiah)'},
    {value: 'TUSD',viewValue:'TUSD (Test US Dollar)'},
    {value: 'TEUR',viewValue:'TEUR (Test Euro)'},
    {value: 'TCNY',viewValue:'TCNY (Test Chinese Yuan)'},
    {value: 'TINR',viewValue:'TINR (Test Indian Rupee)'},
    {value: 'TBRL',viewValue:'TBRL (Test Brazilian Real)'},
    {value: 'TIDR',viewValue:'TIDR (Test Indonesian Rupiah)'},
    {value: 'TUSD',viewValue:'TUSD (Test US Dollar)'}
  ]
}
