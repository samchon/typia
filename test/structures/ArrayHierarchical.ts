import { RandomGenerator } from "../internal/RandomGenerator";

export type ArrayHierarchical = ArrayHierarchical.ICompany[];
export namespace ArrayHierarchical {
    export interface ICompany {
        name: string;
        departments: IDepartment[];
    }
    export interface IDepartment {
        name: string;
        employees: IEmployee[];
    }
    export interface IEmployee {
        name: string;
    }

    export function generate(): ArrayHierarchical {
        return RandomGenerator.array(() => ({
            name: RandomGenerator.string(),
            departments: RandomGenerator.array(() => ({
                name: RandomGenerator.string(),
                employees: RandomGenerator.array(() => ({
                    name: RandomGenerator.string(),
                })),
            })),
        }));
    }
}
