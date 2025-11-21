import { ExerciseAction, WorkoutSet } from "../types/set"
import SetItem from "./SetItem"

interface SetListProps {
    sets: WorkoutSet[],
    exerciseId : number
    onSetAction: (exerciseId: number, setId: number, action: ExerciseAction) => void;
}

export default function SetsList({sets, exerciseId, onSetAction}: SetListProps) {
    return (
        <div className="p-2 space-y-1">
        {
            sets.map(set => {
                return SetItem({
                    set,
                    exerciseId,
                    onSetAction
                })
            })
        }
        </div>
    )
}