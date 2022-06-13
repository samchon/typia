import { RandomGenerator } from "../internal/RandomGenerator";

export type IObjectToJsonArray<T> = IObjectToJsonArray.IArray<T>;
export namespace IObjectToJsonArray {
    export interface IArray<T> {
        toJSON(): T[];
    }

    export function generate<T>(closure: () => T): IObjectToJsonArray<T> {
        return {
            toJSON: () => RandomGenerator.array(closure),
        };
    }
}
