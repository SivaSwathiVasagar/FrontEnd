import React from "react";
import { useState } from "react";

export default function Form(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    muscleGroup: "",
  });
  const handleChange = (event) => {
    //use the event object to detect key and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    //prevent page from refreshing on form submission
    event.preventDefault();
    setIsLoading(true);
    const selectedMuscleGroup = formData.muscleGroup;
    // props.exerciseSearch(selectedMuscleGroup);
    try {
      await props.exerciseSearch(selectedMuscleGroup);
    } catch (error) {
      console.error("Error during API call:", error);
    } finally {
      // Once the API call is completed, set isLoading back to false
      setIsLoading(false);
    }
  };

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="choose"> Choose muscle group : </label>
        <select
          id="choose"
          name="muscleGroup"
          onChange={handleChange}
          value={formData.muscleGroup}
        >
          <option value="" disabled>
            Select muscle group
          </option>
          <option value="Shoulders">Shoulders</option>
          <option value="Lats">Lats</option>
          <option value="Chest">Chest</option>
          <option value="Triceps">Triceps</option>
          <option value="Biceps">Biceps</option>
          <option value="Abs">Abs</option>
        </select>
        {/* <input type="submit" value="submit"  /> */}
        <button
          type="submit"
          value="Submit"
          className="SubmitButton"
          disabled={isLoading}
        >
          {isLoading ? "Fectching your Exercises..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
