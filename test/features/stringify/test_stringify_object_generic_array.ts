import TSON from "../../../src";
import { RandomGenerator } from "../../internal/RandomGenerator";

export function test_stringify_object_generic_array(): void {
    const count: number = RandomGenerator.number(10, 20);
    const page: IPage<IPerson> = {
        pagination: {
            page: 1,
            limit: 10,
            total_count: count,
            total_pages: Math.ceil(count / 10),
        },
        data: RandomGenerator.array(() => ({
            name: RandomGenerator.string(),
            age: RandomGenerator.number(),
        })),
    };

    const json: string = TSON.stringify(page);
    const expected: string = JSON.stringify(page);

    if (json !== expected)
        throw new Error(
            "Bug on TSON.stringify(): failed to understand the generic array membered object type.",
        );
}

interface IPerson {
    name: string;
    age: number;
}

interface IPage<T extends object> {
    pagination: IPage.IPagination;
    data: T[];
}
namespace IPage {
    export interface IPagination {
        page: number;
        limit: number;
        total_count: number;
        total_pages: number;
    }
}
