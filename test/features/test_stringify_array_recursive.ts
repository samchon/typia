import TSON from "../../src";
import { RandomGenerator } from "../internal/RandomGenerator";

export function test_stringify_array_recursive(): void
{
    const categories: ICategory[] = RandomGenerator.array(() => ({
        code: RandomGenerator.string(),
        name: RandomGenerator.string(),
        children: RandomGenerator.array(() => ({
            code: RandomGenerator.string(),
            name: RandomGenerator.string(),
            children: RandomGenerator.array(() => ({
                code: RandomGenerator.string(),
                name: RandomGenerator.string(),
                children: []
            }))
        }))
    }));

    const json: string = TSON.stringify<ICategory[]>(categories);
    const expected: string = JSON.stringify(categories);

    if (json !== expected)
        throw new Error("Bug on typescript-json.stringify(): failed to understand the recursive array type.");
}

interface ICategory
{
    code: string;
    name: string;
    children: ICategory[];
}