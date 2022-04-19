import TSON from "../../src";
import { RandomGenerator } from "../internal/RandomGenerator";

export function test_stringify_class_getter(): void
{
    const person: Person = new Person
    (
        RandomGenerator.string(),
        RandomGenerator.string(),
        false,
    );
    const json: string = TSON.stringify<Person>(person);
    const expected: string = JSON.stringify(person);

    if (json !== expected)
        throw new Error("Bug on typescript-json.stringify(): failed to understand the class getter.");
}

class Person
{
    public constructor
        (
            public readonly id: string,
            public readonly name: string,
            dead: boolean | null
        )
    {
        this.dead = dead;
    }
    public readonly dead: boolean | null;
    
    public get greeting(): string
    {
        return `Hello ${this.name}, nice to meet you.`;
    }
}