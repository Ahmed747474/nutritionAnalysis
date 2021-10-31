export class AnalysisHelper {
  static validateLine(foodsInput: string): boolean {
    let line: string[] = [];
    let Totallines: string[] = foodsInput.split('\n');
    Totallines.forEach((element) => {
      line = element.split(' ');
    });
    return line.length !== 3;
  }
}
