import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { Currency, Period } from '../../shared/interfaces/interfaces';


@Component({
  selector: 'app-calculator-left',
  templateUrl: './calculator-left.component.html',
  styleUrls: ['./calculator-left.component.scss']
})

export class CalculatorLeftComponent implements OnInit, OnDestroy, OnChanges {
  inputValue: number = 0
  profit: number = 0;
  minNumber: number = 1000
  maxNumber: number = 1000000
  selectedCurrency!: Currency
  selectedPeriod!: Period

  public amountVal: number = 0;
  public currencyVal: number = 0;
  public periodVal: number = 0;

  GroupControl!: FormGroup;
  // amountControl = new FormControl("", [Validators.required, Validators.min(this.minNumber), Validators.max(this.maxNumber)]);
  // currencyControl = new FormControl("");
  // periodControl = new FormControl("");

  options: Currency[] = [
    { APR: 0.13 },
    { APR: 0.12 },
    { APR: 0.22 },
    { APR: 0.15 },
    { APR: 0.20 },
    { APR: 0.32 },
    { APR: 0.23 },
    { APR: 0.14 },
    { APR: 0.17 },
    { APR: 0.21 },
    { APR: 0.40 },
    { APR: 0.16 },
    { APR: 0.27 },
    { APR: 0.28 },
    { APR: 0.50 },
    { APR: 0.24 },
    { APR: 0.12 },
    { APR: 0.23 },
    { APR: 0.34 }
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
    { timePeriod: 24, perValue: 24 },
  ]

  @ViewChild('auto') matAutocomplete!: MatAutocomplete

  constructor() {
    this.GroupControl = new FormGroup({
      amount: new FormControl("", [Validators.required, Validators.min(this.minNumber), Validators.max(this.maxNumber)]),
      currency: new FormControl(""),
      period: new FormControl(""),
    });
  }

  ngOnInit() {
    this.GroupControl.controls['amount'].valueChanges.subscribe((value) => {
      // console.log('value', value);
      this.amountVal = value
    });
    this.GroupControl.controls['currency'].valueChanges.subscribe((value) => {
      // console.log('value', value);
      this.currencyVal = value
    });
    this.GroupControl.controls['period'].valueChanges.subscribe((value) => {
      // console.log('value', value);
      this.periodVal = value
    });
  }


  calculateProfit():void {

    if (this.amountVal && this.currencyVal && this.periodVal) {
      // console.log(this.period)
      // console.log(this.currency)
      // console.log(this.amount)
      const profit = (this.amountVal * (this.currencyVal / 100) * (this.periodVal / 12))
      console.log('profit:', profit)
      this.profit = profit
    }
  }


  minusAmount() {
    if (this.inputValue > this.minNumber) {
      this.inputValue -= 1000
      // this.calculateProfit()
    }
  }

  plusAmount() {
    if (this.inputValue < this.maxNumber) {
      this.inputValue += 1000
      // this.calculateProfit()
    }
  }

  filteredOptions!: Observable<Currency[]>;

  private valueChangesSubscription: Subscription | undefined;


  isInvalidAmount(): boolean {
    return this.inputValue < 1000 || this.inputValue > 1000000;
  }

  ngOnDestroy() {
    if (this.valueChangesSubscription) {
      this.valueChangesSubscription.unsubscribe();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['amountVal'] || changes['currencyVal'] || changes['periodVal']) {
      this.calculateProfit()
    }
    // console.log('----===>', this.amountVal);
    // if (changes['amountVal'].currentValue) {
    //   console.log('===>', this.amountVal);
    //   console.log('===>', changes['amountVal'].currentValue);
    // }
  }
}
