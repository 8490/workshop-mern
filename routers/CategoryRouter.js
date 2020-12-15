const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/CategoryController");


route.post("/addCategory", CategoryController.addCategory);

route.get("/getCategory/:id", CategoryController.getCategory);

route.post("/updateCategory", CategoryController.updateCategory);

route.post("/deleteCategory/:id", CategoryController.deleteCategory);

router.get("/", CategoryController.getCategories);


module.exports = router;
