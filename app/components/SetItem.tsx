"use client";
import React from 'react'
import { WorkoutSet } from '../types/set'

interface SetItemProps {
    set: WorkoutSet
    onCompleteChange: (id: number, completed: boolean) => void;
    onDeleted: (id: number) => void;
}

const SetItem = ({set, onCompleteChange, onDeleted }: SetItemProps) => {
  return (
        <div 
        className={`grid items-center grid-cols-4 gap-4 border rounded-md p-2 hover:bg-slate-100 ${
        set.completed ? 'bg-green-200' : ''}`}
        key={set.id}>
          <div>Reps: {set.reps} </div>
          <div>Weight: {set.weight} </div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type='checkbox'
              checked={set.completed}
              onChange={(e) => onCompleteChange(set.id, e.target.checked)}
              className='scale-125'
            />
            <span>Completed</span>
          </label>
          <button 
          className={`border ${set.completed? 'bg-gray-200' : 'bg-red-300'} rounded-md`}
          onClick={() => onDeleted(set.id)}>Delete</button>
        </div>
  )
}

export default SetItem