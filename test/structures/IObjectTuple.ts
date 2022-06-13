import { RandomGenerator } from "../internal/RandomGenerator";

export type IObjectTuple = [IObjectTuple.ISection, IObjectTuple.ICitizen];
export namespace IObjectTuple {
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

    export function generate(): IObjectTuple {
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
