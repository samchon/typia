import { randint } from "tstl/algorithm/random";

export namespace RandomGenerator
{
    const CHARACTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    export function string(length: number = randint(3, 10)): string
    {
        let ret: string = "";
        for (let i: number = 0; i < length; ++i)
        {
            let index: number = randint(9, CHARACTERS.length - 1);
            ret += CHARACTERS[index];
        }
        return ret;
    }

    export function number(min: number = 0, max: number = 100): number
    {
        return randint(min, max);
    }

    export function boolean(): boolean
    {
        return Math.random() < .5;
    }

    export function array<T>(closure: () => T, count: number = randint(1, 3)): T[]
    {
        const output: T[] = [];
        for (let i: number = 0; i < count; ++i)
            output.push(closure());
        return output;
    }
}