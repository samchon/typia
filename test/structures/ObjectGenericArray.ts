import { RandomGenerator } from "../internal/RandomGenerator";

export type ObjectGenericArray =
    ObjectGenericArray.IPage<ObjectGenericArray.IPerson>;
export namespace ObjectGenericArray {
    export interface IPage<T extends object> {
        pagination: IPagination;
        data: T[];
    }
    export interface IPagination {
        page: number;
        limit: number;
        total_count: number;
        total_pages: number;
    }
    export interface IPerson {
        name: string;
        age: number;
    }

    export function generate(): ObjectGenericArray {
        const count: number = RandomGenerator.integer(10, 20);
        return {
            pagination: {
                page: 1,
                limit: 10,
                total_count: count,
                total_pages: Math.ceil(count / 10),
            },
            data: RandomGenerator.array(() => ({
                name: RandomGenerator.string(),
                age: RandomGenerator.integer(),
            })),
        };
    }
}
