import { RandomGenerator } from "../internal/RandomGenerator";

export type ObjectIntersection = ObjectIntersection.IEmail &
    ObjectIntersection.IName;
export namespace ObjectIntersection {
    export interface IEmail {
        email: string;
    }
    export interface IName {
        name: string;
        vulnerable: boolean;
    }
    export function generate(): ObjectIntersection {
        return {
            email: RandomGenerator.string(),
            name: RandomGenerator.string(),
            vulnerable: RandomGenerator.boolean(),
        };
    }
}
