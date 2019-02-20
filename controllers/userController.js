const mongoose = require("mongoose");
const moment = require('moment');
let User = require("../models/User");

let userController = {};

//get list of Users
userController.list = (req,res) => {
    User.find({}, (err, users) => {
         if (err) return res.status(500).send("There was a problem finding the users.");
         res.send(JSON.stringify(users));
         //res.render("../views/users/listing", {users: users,moment: moment});
     });
};

//get user by id
userController.show = (req,res) => {
  User.findById(req.params.id, (err, user) => {
         if (err) return res.status(500).send("There was a problem finding the users.");
         if (!user) return res.status(404).send("No users found.");
         res.send(JSON.stringify(user))
        //res.render("../views/users/show", {user: user, moment: moment});
     });
};

//register new user
userController.create = (req,res) => {
  res.render("../views/users/create");
};

//update new user
userController.save = (req,res) => {
  let user = new User({
    name: req.body.name,
    email:req.body.email,
    phone:req.body.phone,
    password:req.body.password,
    createdOn:moment(req.body.createdOn,"YYYY-MM-DD").toISOString()
  });
  user.save((err,user) => {
     if (err) return res.status(500).send(err);
     res.send(JSON.stringify(user))
    // res.redirect("/users/show/"+user._id);

  });
};

// Edit a usres
userController.edit = (req,res) => {
  User.findById(req.params.id, (err, user) => {
         if (err) return res.status(500).send(err);
         if (!user) return res.status(404).send("No users found.");
         res.render("../views/users/edit", {user: user , moment: moment});
     });
};

//Update a usre
userController.update = (req,res) => {
  User.findByIdAndUpdate({_id: req.params.id},{ $set: {   name: req.body.name,
                                                          email:req.body.email,
                                                          phone:req.body.phone,
                                                          createdOn:moment(req.body.createddate,"YYYY-MM-DD").toISOString()
                                                 }}, {new:true}, (err, user) => {
         if (err) res.render("../views/users/edit", {user: req.body});
         if (!user) return res.status(404).send("No users found.");
         //res.redirect("/users/show/"+user._id);
         res.send(JSON.stringify(user))
     });
};

//Delete a usres
userController.delete = (req,res) => {
  User.remove({_id: req.params.id}, (err) => {
         if (err) return res.status(500).send(err);
         //res.redirect("/users");
         res.send(JSON.stringify({status: true, message: 'user deleted successfully!'}))
     });
};

module.exports  = userController;