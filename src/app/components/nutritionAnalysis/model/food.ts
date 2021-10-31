import { BaseModel } from 'src/app/model/base.model';
export interface DialogData {
  ingrList: AnalysisResponce;
}
export interface ParsedObj {
  food: string;
  foodId: string;
  foodMatch: string;
  measure: string;
  measureURI: string;
  nutrients: FoodAnalysisDetails;
  quantity: number;
  retainedWeight: number;
  status: string;
  weight: number;
}
export interface Ingredient {
  parsed: ParsedObj[];
  text: string;
}
export interface AnalysisResponce {
  calories: number;
  cautions: string[];
  dietLabels: string[];
  healthLabels: string[];
  totalDaily: FoodAnalysisDetails;
  ingredients: Ingredient[];
  totalNutrients: FoodAnalysisDetails;
  totalNutrientsKCal: FoodAnalysisDetails;
  totalWeight: number;
  uri: string;
  yield: number;
}
export interface FoodAnalysisDetails {
  CA?: BaseModel;
  CHOCDF?: BaseModel;
  CHOLE?: BaseModel;
  ENERC_KCAL?: BaseModel;
  FASAT?: BaseModel;
  FAT?: BaseModel;
  FE?: BaseModel;
  FOLDFE?: BaseModel;
  K?: BaseModel;
  MG?: BaseModel;
  NA?: BaseModel;
  NIA?: BaseModel;
  P?: BaseModel;
  PROCNT?: BaseModel;
  RIBF?: BaseModel;
  THIA?: BaseModel;
  VITB6A?: BaseModel;
  VITB12?: BaseModel;
  VITC?: BaseModel;
  VITD?: BaseModel;
  WATER?: BaseModel;
  ZN?: BaseModel;
  FAMS?: BaseModel;
  FAPU?: BaseModel;
  FOLAC?: BaseModel;
  FOLFD?: BaseModel;
  CHOCDF_KCAL: BaseModel;
  FAT_KCAL: BaseModel;
  PROCNT_KCAL: BaseModel;
  FIBTG: BaseModel;
  SUGAR: BaseModel;
}
