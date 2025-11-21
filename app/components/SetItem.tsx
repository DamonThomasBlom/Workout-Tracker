"use client";
import { ExerciseAction, WorkoutSet } from '../types/set'

interface SetItemProps {
    set: WorkoutSet
    exerciseId : number
    onSetAction: (exerciseId: number, setId: number, action: ExerciseAction) => void;
}

const SetItem = ({set, exerciseId, onSetAction }: SetItemProps) => {
  return (
        <div 
        className={`grid items-center grid-cols-4 gap-4 border rounded-md p-2 bg-gray-400  hover:bg-slate-500 ${
        set.completed ? 'bg-green-700' : ''}`}
        key={set.id}>
          <div>Reps: {set.reps} </div>
          <div>Weight (Kg): {set.weight} </div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type='checkbox'
              checked={set.completed}
              // onChange={(e) => onSetAction(set.id, e.target.checked)}
              onChange={(e) => onSetAction(exerciseId, set.id, { type: "complete", value: e.target.checked})}
              className='scale-125'
            />
            <span>Completed</span>
          </label>
          <button 
          className={`border-0 ${set.completed? 'bg-gray-400' : 'bg-red-500'} rounded-md`}
          onClick={() => onSetAction(exerciseId, set.id, { type: "delete" })}>Delete</button>
        </div>
  )
}

export default SetItem