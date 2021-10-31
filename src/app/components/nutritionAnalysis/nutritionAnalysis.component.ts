import { AnalysisHelper } from './helper/analysis-helper';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AnalysisResponce } from './model/food';
import { AnalysisService } from './service/analysis.service';
import { SummaryDialogComponent } from './summary-dialog/summary-dialog.component';
@Component({
  selector: 'app-nutritionAnalysis',
  templateUrl: './nutritionAnalysis.component.html',
  styleUrls: ['./nutritionAnalysis.component.scss'],
})
export class NutritionAnalysisComponent {
  foodsInput = new FormControl();
  foods: string[] = [];
  foodsData!: AnalysisResponce;
  btnLoading: boolean = false;
  analysisLoading: boolean = false;

  constructor(
    private analysisService: AnalysisService,
    private matDialog: MatDialog
  ) {}

  analyzeFoods(): void {
    let foodsInputValue = this.foodsInput.value;
    this.foods = foodsInputValue.split('\n');
    this.analysisLoading = true;
    this.analysisService.analysisFood(this.foods).subscribe(
      (res) => {
        this.foodsData = res;
        this.openSummaryDialog();
        this.analysisLoading = false;
      },
      (err) => {
        console.error(err);
      }
    );
  }
  openSummaryDialog(): void {
    const dialogRef = this.matDialog.open(SummaryDialogComponent, {
      height: '100%',
      width: '100%',
      data: {
        ingrList: this.foodsData,
      },
    });
    dialogRef.afterClosed().subscribe(
      (result) => {
        this.restAnalysisList();
      },
      (err) => {
        console.error(err);
      }
    );
  }
  validateLines(): boolean {
    return AnalysisHelper.validateLine(this.foodsInput.value);
  }
  restAnalysisList(): void {
    this.foodsInput.setValue('');
  }
}
