import { RandomGenerator } from "../internal/RandomGenerator";

export type IArrayHierarchical = IArrayHierarchical.ICompany[];
export namespace IArrayHierarchical {
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
    
    export function generate(): IArrayHierarchical {
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