const express = require('express')

const { getReceipe,addRecipe,editReceipe,getReceipes } = require('../controller/receipe');

const router = express.Router();


router.get('/', getReceipe); //Get receipe list

router.get("/:id",getReceipes);//Get recipe by Id

router.post("/",addRecipe);//Add new recipe

router.put("/:id",editReceipe);//Update recipe by Id

// router.delete("/:id",deleteReceipe);//Delete recipe by Id


module.exports = router;

