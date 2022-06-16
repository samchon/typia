import { RandomGenerator } from "../internal/RandomGenerator";

export type ObjectTuple = [ObjectTuple.ISection, ObjectTuple.ICitizen];
export namespace ObjectTuple {
    export interface ISection {
        id: string;
        code: string;
        name: string;
    }
    export interface ICitizen {
        id: string;
        mobile: string;
        name: string;
    }

    export function generate(): ObjectTuple {
        return [
            {
                id: RandomGenerator.string(),
                code: RandomGenerator.string(),
                name: RandomGenerator.string(),
            },
            {
                id: RandomGenerator.string(),
                mobile: RandomGenerator.string(),
                name: RandomGenerator.string(),
            },
        ];
    }
}
