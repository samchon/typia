import { RandomGenerator } from "../internal/RandomGenerator";
import { Spoiler } from "../internal/Spoiler";

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

    export const SPOILERS: Spoiler<ObjectGenericArray>[] = [
        (input) => {
            input.pagination.page = "one" as any;
            return ["$input.pagination.page"];
        },
        (input) => {
            input.pagination = null!;
            return ["$input.pagination"];
        },
        (input) => {
            input.pagination = {} as any;
            return [
                "$input.pagination.page",
                "$input.pagination.limit",
                "$input.pagination.total_count",
                "$input.pagination.total_pages",
            ];
        },
        (input) => {
            input.data[0].name = null!;
            return ["$input.data[0].name"];
        },
        (input) => {
            input.data[1].age = "one" as any;
            return ["$input.data[1].age"];
        },
        (input) => {
            input.data[2] = null!;
            return ["$input.data[2]"];
        },
    ];
}
