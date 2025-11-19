"use client";
import { useState } from "react";
import SetItem from "./components/SetItem";
import { dummyData } from "./data/setsDummyData";
import AddSetForm from "./components/AddSetForm";
import { WorkoutSet } from "./types/set";
import SetsList from "./components/SetsList";
import ExerciseItem from "./components/ExerciseItem";

export default function Home() {
  const [sets, setSets] = useState(dummyData)

  function onCompleteChange(id: number, completed: boolean){
    setSets((prevSets) => 
      prevSets.map(set => (
        set.id === id ? {...set, completed} : set
      )))
  }

  function onDeleted(id: number){
    setSets((prevSets) => (
      prevSets.filter(set => (
        set.id !== id
      ))
    ))
  }

  function onSubmit(weight: number, reps: number){
    const newSet: WorkoutSet = {
    id: Date.now(),
    weight,
    reps,
    completed: false
    }
    
    setSets((prevSets) => [...prevSets, newSet]);
  }

  return (
      <main>
        <h1 className="font-bold text-3xl text-center p-2">Workout Tracker</h1>
        {/* <SetsList
         sets={sets}
         onCompleteChange={onCompleteChange}
         onDeleted={onDeleted}
         /> */}
        <AddSetForm
        onSubmit={onSubmit}
        />
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
          sets={sets}
          onCompleteChange={onCompleteChange}
          onDeleted={onDeleted}
        />
      </main>
  );
}
