import TSON from "../../src";
import { RandomGenerator } from "../internal/RandomGenerator";

export function test_stringify_class_method(): void
{
    const animal: Animal = new Animal
    (
        RandomGenerator.string(), 
        RandomGenerator.number()
    );
    const json: string = TSON.stringify<Animal>(animal);
    const expected: string = JSON.stringify(animal);

    if (json !== expected)
        throw new Error("Bug on TSON.stringify(): failed to understand the class method.");
}

class Animal
{
    public constructor(public readonly name: string, age: number)
    {
        this.name = name;
        this.age = age;
    }
    public readonly age: number;

    public bark(): string
    {
        return RandomGenerator.string();
    }
}