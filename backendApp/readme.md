how to check data stored in db from mongo db
open terminal
use command mongosh to connect to mongodb url which is by default mongodb://localhost:27017 (make sure mongodb container is up and running and the port 27017 is exposed and mapped)

mydb> show dbs;
admin   40.00 KiB
config  72.00 KiB
local   72.00 KiB
mydb    72.00 KiB
mydb> use mydb;
already on db mydb
mydb> show collections;
users
mydb> db.users.find()
[
  {
    _id: ObjectId("64f38a919b843d2518899fc4"),
    firstName: 'Rahul',
    lastName: 'Srivastava',
    businessEmail: 'srivastavar105.rs@gmail.com',
    mobile: 7753036210,
    __v: 0
  },
