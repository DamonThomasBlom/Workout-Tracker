import { Exercise } from "../types/exercise"
import SetsList from "./SetsList"
import { ExerciseAction, WorkoutSet } from "../types/set";
import AddSetForm from "./AddSetForm";

interface ExerciseItemProps {
    exercise: Exercise;
    onExerciseDeleted: (id: number) => void;
    onSetAction: (exerciseId: number, setId: number, action: ExerciseAction) => void;
}

export default function ExerciseItem({exercise, onExerciseDeleted, onSetAction}: ExerciseItemProps){

    function onSubmit(weight: number, reps: number){
        const newSet: WorkoutSet = {
            id: Date.now(),
            weight,
            reps,
            completed: false
        }

        const newAction: ExerciseAction = {
            type: "submit",
            set: newSet
        }
        
        onSetAction(exercise.id, -1, newAction);
    }

    return (
        <div className="p-4">
            <div className="border-2 rounded-md p-2 space-x-1 bg-gray-700">
                <h1 className="text-2xl font-bold text-blue-400">Workrout {exercise.name}</h1>

                <SetsList
                sets={exercise.sets}
                exerciseId={exercise.id}
                onSetAction={onSetAction}
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