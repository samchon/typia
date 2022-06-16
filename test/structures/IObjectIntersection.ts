import { RandomGenerator } from "../internal/RandomGenerator";

export type IObjectIntersection = IObjectIntersection.IEmail &
    IObjectIntersection.IName;
export namespace IObjectIntersection {
    export interface IEmail {
        email: string;
    }
    export interface IName {
        name: string;
        vulnerable: boolean;
    }
    export function generate(): IObjectIntersection {
        return {
            email: RandomGenerator.string(),
            name: RandomGenerator.string(),
            vulnerable: RandomGenerator.boolean(),
        };
    }
}
