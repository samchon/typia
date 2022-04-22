import { randint } from "tstl/algorithm/random";

export namespace RandomGenerator
{
    const CHARACTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    export function string(length: number = randint(3, 10)): string
    {
        return [...new Array(length)].reduce((prev)=>prev+CHARACTERS[randint(0, CHARACTERS.length - 1)],"");
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
        return [...new Array(count)].map(closure);
    }
}