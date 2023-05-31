import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-right',
  templateUrl: './calculator-right.component.html',
  styleUrls: ['./calculator-right.component.scss']
})
export class CalculatorRightComponent implements OnInit {
  @Input() maxRating = 5
  @Input() SelectStar = 0
  previousSelection = 0
  maxRatingArr: any = []

  ngOnInit(): void {
    this.maxRatingArr = Array(this.maxRating).fill(0)
  }

  HandleMouseEnter(i: number) {
    this.SelectStar = i + 1
  }

  HandleMouseLeave() {
    if (this.previousSelection !== 0) {
      this.SelectStar = this.previousSelection
    } else {
      this.SelectStar = 0
    }
  }

  Rating(i: number) {
    this.SelectStar = i + 1
    this.previousSelection = this.SelectStar
  }
}
