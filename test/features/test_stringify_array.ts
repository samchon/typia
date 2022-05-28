import TSON from "../../src";
import { Primitive } from "../internal/Primitive";
import { RandomGenerator } from "../internal/RandomGenerator";

export function test_stringify_array(): void {
    const person: IPerson = {
        name: RandomGenerator.string(),
        email: RandomGenerator.string(),
        hobbies: RandomGenerator.array(() => ({
            name: RandomGenerator.string(),
            rank: RandomGenerator.number(1, 3),
        })),
    };
    const json: string = TSON.stringify<IPerson>(person);
    const parsed: IPerson = JSON.parse(json);

    if (Primitive.equal_to(person, parsed) === false)
        throw new Error(
            "Bug on TSON.stringify(): failed to understand the array.",
        );
}

interface IPerson {
    name: string;
    email: string;
    hobbies: string | string[] | Array<IHobby>;
}
interface IHobby {
    name: string;
    rank: number;
}
