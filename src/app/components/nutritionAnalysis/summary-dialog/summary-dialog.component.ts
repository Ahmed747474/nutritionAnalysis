import { TotalNutrituinReceiptComponent } from './../total-nutrituin-receipt/total-nutrituin-receipt.component';
import { AnalysisResponce } from './../model/food';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../model/food';

@Component({
  selector: 'app-summary-dialog',
  templateUrl: './summary-dialog.component.html',
  styleUrls: ['./summary-dialog.component.scss'],
})
export class SummaryDialogComponent implements OnInit {
  TotalNutritionAnalysis!: AnalysisResponce;
  getTotalLoading: boolean = false;
  displayTotal: boolean = false;
  errorData: boolean = false;
  @ViewChild('receipt') receipt!: TotalNutrituinReceiptComponent;

  constructor(
    public dialogRef: MatDialogRef<SummaryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
  ngOnInit(): void {
    this.data.ingrList.ingredients.forEach((ingr) => {
      if (!ingr.parsed) this.errorData = true;
    });
  }

  getTotalNutrition(): void {
    this.receipt.getTotalNutrition();
  }
}
