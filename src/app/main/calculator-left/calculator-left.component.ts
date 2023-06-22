import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Currency, Period } from '../../shared/interfaces/interfaces'
import { FormControl } from '@angular/forms';
import { map, Observable, startWith, Subscription } from 'rxjs';
import { MatAutocomplete } from '@angular/material/autocomplete';


@Component({
  selector: 'app-calculator-left',
  templateUrl: './calculator-left.component.html',
  styleUrls: ['./calculator-left.component.scss']
})

export class CalculatorLeftComponent implements OnInit, OnDestroy {
  inputValue: number = 0
  minNumber: number = 0
  myControl = new FormControl('');
  @ViewChild('auto') matAutocomplete!: MatAutocomplete

  options: Currency[] = [
    { value: 'TUSD', viewValue: 'TUSD (Test US Dollar)', APR: 0.13 },
    { value: 'TEUR', viewValue: 'TEUR (Test Euro)', APR: 0.12 },
    { value: 'TCNY', viewValue: 'TCNY (Test Chinese Yuan)', APR: 0.22 },
    { value: 'TINR', viewValue: 'TINR (Test Indian Rupee)', APR: 0.15 },
    { value: 'TBRL', viewValue: 'TBRL (Test Brazilian Real)', APR: 0.20 },
    { value: 'TIDR', viewValue: 'TIDR (Test Indonesian Rupiah)', APR: 0.32 },
    { value: 'TUSD', viewValue: 'TUSD (Test US Dollar)', APR: 0.23 },
    { value: 'TEUR', viewValue: 'TEUR (Test Euro)', APR: 0.14 },
    { value: 'TCNY', viewValue: 'TCNY (Test Chinese Yuan)', APR: 0.17 },
    { value: 'TINR', viewValue: 'TINR (Test Indian Rupee)', APR: 0.21 },
    { value: 'TBRL', viewValue: 'TBRL (Test Brazilian Real)', APR: 0.40 },
    { value: 'TIDR', viewValue: 'TIDR (Test Indonesian Rupiah)', APR: 0.16 },
    { value: 'TUSD', viewValue: 'TUSD (Test US Dollar)', APR: 0.27 },
    { value: 'TEUR', viewValue: 'TEUR (Test Euro)', APR: 0.28 },
    { value: 'TCNY', viewValue: 'TCNY (Test Chinese Yuan)', APR: 0.50 },
    { value: 'TINR', viewValue: 'TINR (Test Indian Rupee)', APR: 0.24 },
    { value: 'TBRL', viewValue: 'TBRL (Test Brazilian Real)', APR: 0.12 },
    { value: 'TIDR', viewValue: 'TIDR (Test Indonesian Rupiah)', APR: 0.23 },
    { value: 'TUSD', viewValue: 'TUSD (Test US Dollar)', APR: 0.34 }
  ];

  period: Period[] = [
    { timePeriod: 1, perValue: 1 },
    { timePeriod: 2, perValue: 2 },
    { timePeriod: 3, perValue: 3 },
    { timePeriod: 4, perValue: 4 },
    { timePeriod: 5, perValue: 5 },
    { timePeriod: 6, perValue: 6 },
    { timePeriod: 7, perValue: 7 },
    { timePeriod: 8, perValue: 8 },
    { timePeriod: 9, perValue: 9 },
    { timePeriod: 10, perValue: 10 },
    { timePeriod: 11, perValue: 11 },
    { timePeriod: 12, perValue: 12 },
  ]

  minusAmount() {
    if (this.inputValue > 0) {
      this.inputValue--
    }
  }

  plusAmount() {
    this.inputValue++
  }


  filteredOptions!: Observable<Currency[]>;

  private valueChangesSubscription: Subscription | undefined;


  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filterOptions(value as string))
    )
    this.valueChangesSubscription = this.filteredOptions.subscribe()
  }

  filterOptions(value: string): Currency[] {
    const filterValue = value.toLowerCase()
    return this.options.filter(option => option.viewValue.toLowerCase().includes(filterValue))
  }

  ngOnDestroy() {
    if (this.valueChangesSubscription) {
      this.valueChangesSubscription.unsubscribe();
    }
  }


}
