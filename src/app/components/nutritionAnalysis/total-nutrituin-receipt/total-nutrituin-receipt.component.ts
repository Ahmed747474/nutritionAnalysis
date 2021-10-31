import { AnalysisResponce } from './../model/food';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-total-nutrituin-receipt',
  templateUrl: './total-nutrituin-receipt.component.html',
  styleUrls: ['./total-nutrituin-receipt.component.scss'],
})
export class TotalNutrituinReceiptComponent {
  @Input() data!: AnalysisResponce;
  getTotalLoading: boolean = false;
  public getTotalNutrition(): void {
    this.getTotalLoading = true;
  }
}
