"use client";
import { useState } from "react";
import ExerciseItem from "./components/ExerciseItem";
import { exerciseDummyData } from "./data/exerciseDummyData";

export default function Home() {

  const [dummyExcercises, setExercises] = useState(exerciseDummyData)

  function onExerciseDeleted(id: number){
    setExercises((prevExercises) => (
      prevExercises.filter(exercise => (
        exercise.id !== id
      ))
    ))
  }

  return (
      <main>
        <h1 className="font-bold text-3xl text-center p-2">Workout Tracker</h1>
        {/* <SetsList
         sets={sets}
         onCompleteChange={onCompleteChange}
         onDeleted={onDeleted}
         /> */}
        {/* <AddSetForm
        onSubmit={onSubmit}
        /> */}
        {/* <div className="p-4">
          <div className="border-2 rounded-md p-2 space-x-1 bg-gray-700">
              <h1 className="text-2xl font-bold text-blue-400">Workout Name Here</h1>

              <SetsList
              sets={sets}
              onCompleteChange={onCompleteChange}
              onDeleted={onDeleted}
              />

              <div className="flex justify-end items-end ">
                  <button className="border bg-red-300 rounded-md p-2">
                      Delete Exercise
                  </button>
              </div>
          </div>
        </div> */}
        <ExerciseItem 
          exercise={dummyExcercises[0]}
          onExerciseDeleted={onExerciseDeleted}
        />
      </main>
  );
}
