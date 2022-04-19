import TSON from "../../src";
import { RandomGenerator } from "../internal/RandomGenerator";

export function test_stringify_object_intersection(): void
{
    const input: IEmail&IName = {
        email: RandomGenerator.string(),
        name: RandomGenerator.string(),
        vulnerable: RandomGenerator.number() as any
    };
    const json: string = TSON.stringify<IEmail&IName>(input);
    const expected: string = JSON.stringify(input);

    if (json !== expected)
        throw new Error(`Bug on TSON.stringify(): failed to understand the object intersection type.`);
}

interface IEmail
{
    email: string;
}
interface IName
{
    name: string;
    vulnerable: boolean&IEmail;
}