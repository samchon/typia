import { RandomGenerator } from "../internal/RandomGenerator";

export type IObjectRecursive = IObjectRecursive.IDepartment;
export namespace IObjectRecursive {
    export interface IDepartment {
        name: string;
        parent: IDepartment | null;
    }
    export function generate(
        limit: number = 5,
        index: number = 0,
    ): IObjectRecursive {
        return {
            name: RandomGenerator.string(),
            parent: index < limit ? generate(limit, index + 1) : null,
        };
    }
}
