import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable()
export class ExcelService {

  constructor() { }

  public exportProjectsExcelFile(json: any[], excelFileName: string, tableHeaders: any[], titleLinks: any[]): void {
   
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);

	worksheet['A1'].v = tableHeaders[0];
	worksheet['B1'].v = tableHeaders[1];
	worksheet['C1'].v = tableHeaders[2];
  worksheet['D1'].v = tableHeaders[3];	
  
  for (let i = 0; i < titleLinks.length; i++) {            
    worksheet['A' + (2 + i)].l = { Target: titleLinks[i] };
    worksheet['A' + (2 + i)].s = { color: "blue" };
}  

	const workbook: XLSX.WorkBook = { Sheets: { 'Project Documents': worksheet }, SheetNames: ['Project Documents'] };
	
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
	
  }
  
    public exportArchivalExcelFile(json: any[], excelFileName: string, tableHeaders: any[], titleLinks: any[]): void {
   
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);

	worksheet['A1'].v = tableHeaders[0];
	worksheet['B1'].v = tableHeaders[1];
	worksheet['C1'].v = tableHeaders[2];
  worksheet['D1'].v = tableHeaders[3];	
  for (let i = 0; i < titleLinks.length; i++) { 
    if(titleLinks[i] !== "")     
    {      
    worksheet['A' + (2 + i)].l = { Target: titleLinks[i] };
    worksheet['A' + (2 + i)].s = { color: "blue" };
    }
}  

	const workbook: XLSX.WorkBook = { Sheets: { 'Archival Records': worksheet }, SheetNames: ['Archival Records'] };
	
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
	
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + EXCEL_EXTENSION);
  }

}
