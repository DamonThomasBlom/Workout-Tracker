"use client";
import { useState } from "react";
import ExerciseItem from "./components/ExerciseItem";
import { exerciseDummyData } from "./data/exerciseDummyData";
import { ExerciseAction, WorkoutSet } from "./types/set";

export default function Home() {

  const [dummyExcercises, setExercises] = useState(exerciseDummyData)

  function onExerciseDeleted(id: number){
    setExercises((prevExercises) => (
      prevExercises.filter(exercise => (
        exercise.id !== id
      ))
    ))
  }

  function onSetAction(exerciseId: number, setId: number, action: ExerciseAction){
    setExercises((prevExercises) => (
      prevExercises.map(exercise => {
        if (exercise.id !== exerciseId) return exercise;

        switch(action.type){
          case "complete":
            return { ...exercise, sets: exercise.sets.map(s =>
              s.id === setId ? {...s, completed: action.value ?? false } : s
            )}

          case "delete":
            return {
              ...exercise, sets: exercise.sets.filter(set => (
                set.id !== setId
              ))
            }
          case "submit":
            const newSet: WorkoutSet = {
              id: Date.now(),
              weight: action.set?.weight ?? 0,
              reps: action.set?.reps ?? 0,
              completed: false
            }

            return { ...exercise, sets: [...exercise.sets, newSet] }
        }
        return exercise;
      })
    ))
  }

  return (
      <main>
        <h1 className="font-bold text-3xl text-center p-2">Workout Tracker</h1>
        {
          dummyExcercises.map(exercise => (
            <ExerciseItem 
              key={exercise.id}
              exercise={exercise}
              onExerciseDeleted={onExerciseDeleted}
              onSetAction={onSetAction}
            />
          ))
        }
        {/* <ExerciseItem 
          exercise={dummyExcercises[0]}
          onExerciseDeleted={onExerciseDeleted}
          onSetAction={onSetAction}
        /> */}
      </main>
  );
}
