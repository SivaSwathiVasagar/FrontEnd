// import React from "react";
import React from "react";

export default function GetExercise({ exercises, isLoading }) {
  const loaded = () => {
    const Exercise = [...exercises.exercises];
    let beginnerArray = [];
    let intermediateArray = [];
    let advancedArray = [];
    let allExercisesArray = [];
    Exercise.filter((Exercises) => {
      if (Exercises.experience == "Beginner") {
        beginnerArray.push(Exercises);
      } else if (Exercises.experience == "Intermediate") {
        intermediateArray.push(Exercises);
      } else {
        advancedArray.push(Exercises);
      }
    });
    for (let j = 0; j < 2 && j < beginnerArray.length; j++) {
      allExercisesArray.push(beginnerArray[j]);
    }

    for (let j = 0; j < 2 && j < intermediateArray.length; j++) {
      allExercisesArray.push(intermediateArray[j]);
    }

    for (let j = 0; j < 2 && j < advancedArray.length; j++) {
      allExercisesArray.push(advancedArray[j]);
    }

    return (
      <div className="GetExercise">
        <h2>Here is the list</h2>
        <div className="ExerciseList">
          {allExercisesArray.map((allExercises, index) => (
            <div className="AllExercise" key={index}>
              <h3>Name: {allExercises.name}</h3>
              <h4>Experience: {allExercises.experience}</h4>
              <p>Equipment: {allExercises.equipment}</p>
              <p>Force type: {allExercises.force_type}</p>
              <p>Primary Muscles: {allExercises.primary_muscles}</p>
              <p>Secondary Muscles: {allExercises.secondary_muscles}</p>
              <p>Mechanics: {allExercises.mechanics}</p>
              <p>Reps: 3 sets (12 to 15 repetitions/set)</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  const loading = () => {
    // Check if any muscle group is selected
    const isMuscleGroupSelected = exercises && exercises.exercises.length > 0;

    return (
      <div className="GetExercise">
        <h2>
          {isLoading
            ? "Exercises are loading, Please hold tight"
            : isMuscleGroupSelected
            ? "No exercise to display"
            : ""}
        </h2>
      </div>
    );
  };

  //Ternary operator will determine which functions JSX we will return
  return exercises ? loaded() : loading();
}
