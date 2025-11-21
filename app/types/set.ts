export interface WorkoutSet {
    id: number,
    weight: number
    reps: number
    completed: boolean
}

export interface ExerciseAction {
  type: string;
  value?: boolean | null;
  set?: WorkoutSet | null;
}