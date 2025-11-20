import { useState } from "react";
import { Exercise } from "../types/exercise"
import SetsList from "./SetsList"
import { dummyData } from "../data/setsDummyData";
import { WorkoutSet } from "../types/set";
import AddSetForm from "./AddSetForm";

interface ExerciseItemProps {
    exercise: Exercise;
    // onCompleteChange: (id: number, completed: boolean) => void;
    // onDeleted: (id: number) => void;
    onExerciseDeleted: (id: number) => void;
}

export default function ExerciseItem({exercise, onExerciseDeleted}: ExerciseItemProps){

    const [sets, setSets] = useState(exercise.sets)

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
        <div className="p-4">
            <div className="border-2 rounded-md p-2 space-x-1 bg-gray-700">
                <h1 className="text-2xl font-bold text-blue-400">Workrout {exercise.name}</h1>

                <SetsList
                sets={sets}
                onCompleteChange={onCompleteChange}
                onDeleted={onDeleted}
                />

                <AddSetForm
                onSubmit={onSubmit}
                />

                <div className="flex justify-end items-end ">
                    <button className="border-2 bg-red-500 rounded-md p-2"
                    onClick={() => onExerciseDeleted(exercise.id)}>
                        Delete Exercise
                    </button>
                </div>
            </div>
        </div>
    )
}