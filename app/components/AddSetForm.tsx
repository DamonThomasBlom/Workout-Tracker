import React, { useState } from 'react'

interface SetFormProps {
    onSubmit: (weight: number, reps: number) => void;
}

export default function AddSetForm({onSubmit}: SetFormProps) {
//   const [currentSetForm, SetForm] = useState({
//     weight: 0,
//     reps: 0,
// })

  const [currentWeight , SetWeight] = useState(0);
  const [currentReps , SetReps] = useState(0);
  const [creatingSet , SetCreatingSet] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();

    if (currentWeight == 0 || currentReps == 0) return;

    onSubmit(currentWeight, currentReps);
    SetWeight(0);
    SetReps(0);
    SetCreatingSet(false);
  }

  return (
    // If we are creating a set render this
    <>{creatingSet ?     
    <form className='p-2 flex items-center' onSubmit={handleSubmit}>
      <label className='flex gap-3 p-2'>
        Weight: 
        <input type='number'
        value={currentWeight}
        className='w-16 px-2 text-left border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500'
        onChange={(e) => SetWeight(Number(e.target.value))}
        />
      </label>
      <label className='flex gap-3 p-2'>
        Reps: 
        <input type='number'
        value={currentReps}
        className='w-16 px-2 text-left border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500'
        onChange={(e) => SetReps(Number(e.target.value))}
        />
      </label>
      <button 
        type='submit'
        className='border h-8 bg-green-200 rounded-md p-2 text-center flex items-center justify-center'>
        Submit
      </button>
    </form> 
    : <div className='p-2'>
      <button
      className='border rounded-md bg-green-200 p-2'
      onClick={() => SetCreatingSet(!creatingSet)}>
        Create Set
      </button>
      </div>}
    </>
  )
}