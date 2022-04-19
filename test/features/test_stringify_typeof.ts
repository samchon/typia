import TSON from "../../src";
import { RandomGenerator } from "../internal/RandomGenerator";

export function test_stringify_object_typeof(): void
{
    const section: ISection = {
        code: RandomGenerator.string(),
        name: RandomGenerator.string()
    };
    const json: string = TSON.stringify<typeof section>(section);
    const expected: string = JSON.stringify(section);

    if (json !== expected)
        throw new Error(`Bug on TSON.stringify(): failed to understand the typeof statement.`);
}

interface ISection
{
    code: string;
    name: string;
}