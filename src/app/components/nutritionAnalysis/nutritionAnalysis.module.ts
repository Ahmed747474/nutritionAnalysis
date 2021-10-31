import { TotalNutrituinReceiptComponent } from './total-nutrituin-receipt/total-nutrituin-receipt.component';
import { NgModule } from '@angular/core';
import { NutritionAnalysisComponent } from './nutritionAnalysis.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SummaryDialogComponent } from './summary-dialog/summary-dialog.component';
import { IngrErrorComponent } from './ingr-error/ingr-error.component';

@NgModule({
  imports: [SharedModule],
  declarations: [
    NutritionAnalysisComponent,
    SummaryDialogComponent,
    TotalNutrituinReceiptComponent,
    IngrErrorComponent,
  ],
  entryComponents: [SummaryDialogComponent],
})
export class NutritionAnalysisModule {}
