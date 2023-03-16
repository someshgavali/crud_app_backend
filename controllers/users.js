 
const UsersModel = require("./../models/users");

 //get,/users, get the details of users and send to frontend

exports.getUsers = async(req,res) => {

   
const users = await UsersModel.find();

    res.json(users); 


// res.json(await UsersModel.find()); 
};


exports.getUser = async (req,res) => {
    
    res.json(await UsersModel.find({ _id: req.params.userId})); 
    
 };
    

//post-> to save the data --------- user save kraycha code ------

exports.saveUser =async(req,res) =>{
    // console.log(req.body);

    const newUser = UsersModel(req.body);
    // console.log(newUser);

   await newUser.save();

    // res.send (await newUser.save());
    res.send ("Data Inserted Successfully");

};


//update the data ------------------------------
exports.updateUser = async(req,res) => {

UsersModel.findOneAndUpdate({_id: req.params.userId},req.body,{new:true},(err,data) => { res.send(data)});

// res.send("update user called");
};


//delete the data -------------------------------

exports.deleteUser = async (req,res) => {
 
UsersModel.findOneAndDelete({_id: req.params.userId},(err,data) => { res.send(data)});
};










