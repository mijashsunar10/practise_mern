const Receipes = require('../models/receipe')

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
const addRecipe = async (req, res) => { // // Define an async function named addRecipe (handles adding a new recipe)
    const { title, ingredients, instructions, time } = req.body;

    if (!title || !ingredients || !instructions) {
        return res.json({ message: "Required fields cannot be empty" });
    }

    try {
        const newRecipe = await Receipes.create({
            title,
            ingredients,
            instructions,
            time
        });

        return res.json(newRecipe);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error while adding recipe" });
    }
}

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






module.exports = {getReceipe, getReceipes,addRecipe,editReceipe}
