# node-rest-api-with-ejs

This sample code design for creating REST web service in node using EXPRESS framework with EJS view engine.

# Used 

- Node
- Express
- EJS view engine
- Mongodb(mLab)


# Installation

- Clone the repo by using git clone.
- Run npm install on the cloned directory.
- cahange your mLab credentials with your's in this line 
  mongoose.connect('mongodb://ash:espo2050@ds141815.mlab.com:41815/quize_app')
- Run npm start command.


# mLab User Schema
```sh
 let UserSchema = new mongoose.Schema({
     name: {
        type: String,
        required: true
      },
     email: {
      type: String,
       required: true
     },
     password: {
      type: String,
      required: true
     },
     phone: {
        type: String,
        required: true
     },
     createdOn: {
      type:Date,
      required: true
     },
});
```

# API Endpoints

- GET http://localhost:3000/users
- POST http://localhost:3000/users/create/ //Send User Schema 
- GET http://localhost:3000/users/show/:id // get user with Mongo id ":id"
- POST http://localhost:3000/users/delete/:id // get user with Mongo id ":id"
