const express = require("express")

const router = express.Router();


//to get the all user data
router.get("/",require("./../controllers/users").getUsers);

//get user data by id

router.get("/:userId",require("./../controllers/users").getUser);

//to insert the user data
router.post("/",require("./../controllers/users").saveUser);


//to update the user data
router.put("/:userId",require("./../controllers/users").
updateUser);



//to delete the user data
router.delete("/:userId",require("./../controllers/users").deleteUser);

module.exports = router;




//  ----HTTP Methods----------

// 1 GET => to get the data on frontend
// 2 POST =>to insert the data
// 3 PUT => to update the record 
// 4 PATCH => to update the record (partially)
// 5 DALETE =>to delete the data





