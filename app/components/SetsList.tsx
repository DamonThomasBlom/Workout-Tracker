import { WorkoutSet } from "../types/set"
import SetItem from "./SetItem"

interface SetListProps {
    sets: WorkoutSet[],
    onCompleteChange: (id: number, completed: boolean) => void;
    onDeleted: (id: number) => void;
}

export default function SetsList({sets, onCompleteChange, onDeleted}: SetListProps) {
    return (
        <div className="p-2 space-y-1">
        {
            sets.map(set => {
            return SetItem({
                set,
                onCompleteChange,
                onDeleted
            })
            })
        }
        </div>
    )
}