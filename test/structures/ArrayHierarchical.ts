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
            id: RandomGenerator.number(),
            serial: RandomGenerator.number(),
            name: RandomGenerator.string(),
            established_at: {
                time: RandomGenerator.number(),
                zone: RandomGenerator.number(),
            },
            departments: RandomGenerator.array(() => ({
                id: RandomGenerator.number(),
                code: RandomGenerator.string(),
                sales: RandomGenerator.number(),
                created_at: {
                    time: RandomGenerator.number(),
                    zone: RandomGenerator.number(),
                },
                employees: RandomGenerator.array(() => ({
                    id: RandomGenerator.number(),
                    name: RandomGenerator.string(),
                    age: RandomGenerator.number(),
                    grade: RandomGenerator.number(),
                    employeed_at: {
                        time: RandomGenerator.number(),
                        zone: RandomGenerator.number(),
                    },
                })),
            })),
        }));
    }
}
