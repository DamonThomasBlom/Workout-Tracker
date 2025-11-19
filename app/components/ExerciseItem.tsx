import { Exercise } from "../types/exercise"
import { WorkoutSet } from "../types/set"
import SetsList, { SetListProps } from "./SetsList"

interface ExerciseItemProps {
    setListProps : SetListProps
    exercise : Exercise
}

export default function ExerciseItem({sets, onCompleteChange, onDeleted}: SetListProps){
    return (
        <div className="p-4">
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
        </div>
    )
}