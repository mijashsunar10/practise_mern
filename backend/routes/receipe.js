const express = require('express')

const { getReceipe,addRecipe,editReceipe,getReceipes,upload } = require('../controller/receipe');

const router = express.Router();


router.get('/', getReceipe); //Get receipe list

router.get("/:id",getReceipes);//Get recipe by Id

router.post("/",upload.single('file'),addRecipe);//Add new recipe

//upload.single('file') the name should be same as name of the frontend the image 

router.put("/:id",editReceipe);//Update recipe by Id

// router.delete("/:id",deleteReceipe);//Delete recipe by Id


module.exports = router;

