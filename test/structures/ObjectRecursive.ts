import { RandomGenerator } from "../internal/RandomGenerator";

export type ObjectRecursive = ObjectRecursive.IDepartment;
export namespace ObjectRecursive {
    export interface IDepartment {
        name: string;
        parent: IDepartment | null;
    }
    export function generate(
        limit: number = 5,
        index: number = 0,
    ): ObjectRecursive {
        return {
            name: RandomGenerator.string(),
            parent: index < limit ? generate(limit, index + 1) : null,
        };
    }
}
