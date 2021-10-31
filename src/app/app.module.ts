import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Base_Remote_ApiUrl } from './Config/defaultss.config';
import { ApiUrlInterceptor } from './shared/services/apiurl.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpConfigInterceptors } from './shared/services/http.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { MaterialModule } from './framework/material/material.module';
import { NutritionAnalysisModule } from './components/nutritionAnalysis/nutritionAnalysis.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LAYOUT_COMPONENTS } from './layout';

@NgModule({
  declarations: [AppComponent, LAYOUT_COMPONENTS],
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NutritionAnalysisModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: Base_Remote_ApiUrl, useFactory: getBaseUrl },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiUrlInterceptor,
      multi: true,
      deps: [Base_Remote_ApiUrl],
    },
    HttpConfigInterceptors,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function getBaseUrl() {
  return environment.baseUrl;
}
