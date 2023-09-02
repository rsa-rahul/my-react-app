
const XLSX = require('xlsx');
class ExcelReader {
    constructor(excelFileName) {
        this.excelFileName = excelFileName;
    }

    init() {
        this.workbook = XLSX.readFile(this.excelFileName);
    }

    readData(sheetName, columnName) {
        let sheet = this.workbook.Sheets[sheetName];
        const columnData = [];

        // Loop through the rows in the specified column
        for (let i = 4; i <= 65536; i++) {
            const cellAddress = columnName + i;
            const cell = sheet[cellAddress];

            if (!cell || !cell.v) {
                // If the cell is empty, we've reached the end of the column
                continue;
            }

            // Push the cell value to the columnData array
            columnData.push(cell.v);
        }
        return columnData;
    }
}
module.exports = ExcelReader;