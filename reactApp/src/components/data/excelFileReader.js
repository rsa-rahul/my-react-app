import * as XLSX from 'xlsx';

function ExcelReader(columnIndex) {
    let fileName = '/Users/rahulsrivastava/Documents/GitHub/my-react-app/src/components/data/Terrapay.xlsx';
    // const fileName = './Terrapay.xlsx';
    fileName='/Users/rahulsrivastava/Documents/GitHub/my-react-app/Simple.xlsx';
    const workbook = XLSX.readFile(fileName);

    // Assuming the sheet name is "Sheet1"
    const sheetName = 'Sheet1';
    const worksheet = workbook.Sheets[sheetName];

    // Assuming the column name is "ColumnA"
    const columnName = 'A';

    // Extract data from the specified column
    const columnData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) // Convert sheet data to JSON
        .map((row) => row[columnName]); // Extract data from the specified column

    console.log(columnData);
    return columnData;
}
export default ExcelReader;