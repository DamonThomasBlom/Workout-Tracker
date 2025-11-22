import React, { useState } from 'react'

interface AddExerciseFormProps {
    onSubmit: (exerciseName: string) => void;
}

export default function AddExerciseForm({ onSubmit } : AddExerciseFormProps) {
    const [creatingExercise, setCreatingExercise] = useState(false);
    const [input, setInput] = useState("")

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        // Prevent empty entries
        if (input.trim() === "") return;

        onSubmit(input);
        setInput("");
        setCreatingExercise(false);
    }

    return (
    <>
        {creatingExercise ? 
        <div className='p-4'>
            <div className='border p-4 rounded-md bg-gray-700'>
                <form className='gap-2 flex' onSubmit={handleSubmit}>
                    <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className='border rounded-md p-2 gap-2 w-75'
                    placeholder='Enter exercise name...'>
                    </input>
                    <button 
                    type='submit'
                    className='border h-10 w-40 bg-green-600 rounded-md p-2 text-center flex items-center justify-center'>
                        Create Exercise
                    </button>
                </form>
            </div>
        </div>
        
        :
        <div className='p-4'>
            <button 
            type='submit'
            className='border h-10 w-40 bg-green-600 rounded-md p-2 text-center flex items-center justify-center'
            onClick={() => setCreatingExercise(!creatingExercise)}>
            Add Exercise
            </button>
        </div>}
    </>
  )
}