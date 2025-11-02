const Receipes = require('../models/receipe')
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images');
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname); // get file extension (.jpg, .png, etc.)
    const filename = Date.now() + '-' + file.fieldname + ext;
    cb(null, filename);
  }
});

// const upload = multer({ storage: storage });

const upload = multer({ storage: storage })

const getReceipe = async(req,res)=>{
    const receipes = await Receipes.find();
    res.json(receipes);
}
    
const getReceipes = async(req, res) => {
    // res.send('Get receipe list');

    const receipe = await Receipes.findById(req.params.id);
    res.json(receipe);

}


// Add new receipe
const addRecipe = async (req, res) => {
  const { title, ingredients, instructions, time } = req.body;

  console.log("File:", req.file);
  console.log("Body:", req.body); // should now contain proper data

  if (!title || !ingredients || !instructions) {
    return res.status(400).json({ message: "Required fields cannot be empty" });
  }

  try {
    const newRecipe = await Receipes.create({
      title,
      ingredients: ingredients.split(',').map(i => i.trim()),
      instructions,
      time,
      coverImage: req.file.filename
    });

    res.json(newRecipe);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server error while adding recipe" });
  }
};

const editReceipe = async(req, res) => {
    // res.send('Update recipe by Id');
    const { title, ingredients, instructions, time } = req.body;
    let receipe = await Receipes.findById(req.params.id);
    try{
         if(receipe){
        await Receipes.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json({title,ingredients,instructyions,time});
    }


    }
    catch(error){
       return res.status(404).json({message:"Recipe not found"})
    }
   

}






module.exports = {getReceipe, getReceipes,addRecipe,editReceipe,upload}
