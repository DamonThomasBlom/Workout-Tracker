import { WorkoutSet } from "./set";

export interface Exercise {
    id: number,
    name: string,
    sets: WorkoutSet[]
}