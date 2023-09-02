const express = require('express');
const ExcelReader = require('./logic/excelReader');
const app = express();
const port = 5001; // Port for your Node.js server
const cors = require('cors');
const MongooseConnection=require('./mongomodel/userschema')

app.use(express.json());
app.use(cors());

const mongooseConn = new MongooseConnection();
mongooseConn.connect();
const User = mongooseConn.getUserSchema();
app.get('/api/readcurrencydata', (req, res) => {
    //   const filePath = req.body.filePath; // You can pass the file path in the request body
    const fileName = 'data/Terrapay.xlsx';
    let exclReader = new ExcelReader(fileName);

    exclReader.init();

    let validCurrencies = exclReader.readData('P2P', 'F');
    let invalidCurrencies = exclReader.readData('P2P', 'H');
    // Initialize an array to store the column data
    
    // const jsonData = XLSX.utils.sheet_to_json(sheet);

    // res.json(jsonData);
    let jsonData = {
        validCurrencies,
        invalidCurrencies
    }
    res.json(jsonData);
});
app.post('/api/users', async (req, res) => {
    try {
      const userData = req.body; // Assuming you're sending user data in the request body
      const user = new User(userData);
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Error saving user data' });
    }
  });
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
