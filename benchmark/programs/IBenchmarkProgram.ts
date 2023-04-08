import { IMeasurement } from "../structures/IMeasurement";

export interface IBenchmarkProgram<T> {
    measure: (input: T) => IMeasurement;
    validate: (input: T) => boolean;
    skip: (name: string) => boolean;
}
