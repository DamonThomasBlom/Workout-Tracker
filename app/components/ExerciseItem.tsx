import { Exercise } from "../types/exercise"
import { WorkoutSet } from "../types/set"
import SetsList from "./SetsList"

interface ExerciseItemProps {
    exercise: Exercise;
    onCompleteChange: (id: number, completed: boolean) => void;
    onDeleted: (id: number) => void;
}

export default function ExerciseItem({exercise, onCompleteChange, onDeleted}: ExerciseItemProps){
    return (
        <div className="p-4">
            <div className="border-2 rounded-md p-2 space-x-1 bg-gray-700">
                <h1 className="text-2xl font-bold text-blue-400">Workrout {exercise.name}</h1>

                <SetsList
                sets={exercise.sets}
                onCompleteChange={onCompleteChange}
                onDeleted={onDeleted}
                />

                <div className="flex justify-end items-end ">
                    <button className="border-2 bg-red-500 rounded-md p-2">
                        Delete Exercise
                    </button>
                </div>
            </div>
        </div>
    )
}