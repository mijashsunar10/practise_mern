import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const AddFoodReceipe = () => {
  const [receipeData, setReceipeData] = useState({
    title: '',
    time: '',
    ingredients: '',
    instructions: '',
    file: null
  });

  const navigate = useNavigate();

  const onHandleChange = (e) => {
    const { name, value, files } = e.target;

    setReceipeData((prev) => ({
      ...prev,
      [name]: name === "file" ? files[0] : value
    }));
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', receipeData.title);
    formData.append('time', receipeData.time);
    formData.append('instructions', receipeData.instructions);
    formData.append('ingredients', receipeData.ingredients);
    formData.append('file', receipeData.file); // must match multer fieldname

    try {
      const res = await axios.post("http://localhost:3000/receipe", formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log(res.data);
      navigate("/");
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={onHandleSubmit}>
        <div className="form-control">
          <label>Title</label>
          <input type="text" name="title" className="input" onChange={onHandleChange} />
        </div>

        <div className="form-control">
          <label>Time</label>
          <input type="text" name="time" className="input" onChange={onHandleChange} />
        </div>

        <div className="form-control">
          <label>Ingredients</label>
          <textarea name="ingredients" rows="4" className="input-textarea" onChange={onHandleChange}></textarea>
        </div>

        <div className="form-control">
          <label>Instructions</label>
          <textarea name="instructions" rows="4" className="input-textarea" onChange={onHandleChange}></textarea>
        </div>

        <div className="form-control">
          <label>Recipe Image</label>
          <input type="file" name="file" className="input" onChange={onHandleChange} />
        </div>

        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddFoodReceipe;
