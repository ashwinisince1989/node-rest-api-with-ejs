var express = require('express');
var router = express.Router();
let user = require("../controllers/userController.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  user.list(req,res);
});

//get user by id 
router.get('/show/:id',(req,res) =>{
  user.show(req,res);
});

//create new user 
router.get('/create',(req,res)=>{
  user.create(req,res);
})

//save a user
router.post('/save', (req, res) => {
  user.save(req, res);
});

//edit a user
router.get('/edit/:id',(req, res) => {
  user.edit(req, res);
});


//update a user
router.post('/update/:id',(req, res) => {
  user.update(req, res);
});

//delete user
router.post('/delete/:id',(req,res)=>{
  user.delete(req,res);
});
module.exports = router;