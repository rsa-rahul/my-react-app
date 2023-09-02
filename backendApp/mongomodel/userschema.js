const mongoose = require('mongoose');
class MongooseConnection {
    constructor() {
        this.mongoDbUrl = 'mongodb://localhost:27017/mydb';
    }
    async connect() {
        await mongoose.connect(this.mongoDbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    }
    getUserSchema() {
        const userSchema = new mongoose.Schema({
            firstName: String,
            lastName: String,
            businessEmail: String,
            mobile: Number
        });

        return mongoose.model('User', userSchema);
    }
}
module.exports = MongooseConnection;