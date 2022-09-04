import { RandomGenerator } from "../internal/RandomGenerator";

export type ArrayHierarchical = ArrayHierarchical.ICompany[];
export namespace ArrayHierarchical {
    export interface ICompany {
        id: number;
        serial: number;
        name: string;
        established_at: ITimestamp;
        departments: IDepartment[];
    }
    export interface IDepartment {
        id: number;
        code: string;
        sales: number;
        created_at: ITimestamp;
        employees: IEmployee[];
    }
    export interface IEmployee {
        id: number;
        name: string;
        age: number;
        grade: number;
        employeed_at: ITimestamp;
    }
    export interface ITimestamp {
        time: number;
        zone: number;
    }

    export function generate(): ArrayHierarchical {
        return RandomGenerator.array(() => ({
            id: RandomGenerator.integer(),
            serial: RandomGenerator.integer(),
            name: RandomGenerator.string(),
            established_at: {
                time: RandomGenerator.integer(),
                zone: RandomGenerator.integer(),
            },
            departments: RandomGenerator.array(() => ({
                id: RandomGenerator.integer(),
                code: RandomGenerator.string(),
                sales: RandomGenerator.integer(),
                created_at: {
                    time: RandomGenerator.integer(),
                    zone: RandomGenerator.integer(),
                },
                employees: RandomGenerator.array(() => ({
                    id: RandomGenerator.integer(),
                    name: RandomGenerator.string(),
                    age: RandomGenerator.integer(),
                    grade: RandomGenerator.integer(),
                    employeed_at: {
                        time: RandomGenerator.integer(),
                        zone: RandomGenerator.integer(),
                    },
                })),
            })),
        }));
    }
}
