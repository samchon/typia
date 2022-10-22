import { RandomGenerator } from "../internal/RandomGenerator";
import { Spoiler } from "../internal/Spoiler";

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

    export const SPOILERS: Spoiler<ObjectIntersection>[] = [
        (input) => {
            input.email = { value: "email" } as any;
            return ["$input.email"];
        },
        (input) => {
            input.name = [] as any;
            return ["$input.name"];
        },
        (input) => {
            input.vulnerable = 1 as any;
            return ["$input.vulnerable"];
        },
    ];
}
