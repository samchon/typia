import { IPointer } from "../helpers/IPointer";
import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export type ArraySimplePointer = IPointer<ArraySimplePointer.IPerson[]>;
export namespace ArraySimplePointer {
    export interface IPerson {
        name: string;
        email: string;
        hobbies: IHobby[];
    }
    export interface IHobby {
        name: string;
        body: string;
        rank: number;
    }

    export function generate(): ArraySimplePointer {
        return {
            value: TestRandomGenerator.array(() => ({
                name: TestRandomGenerator.string(),
                email: TestRandomGenerator.string(),
                hobbies: TestRandomGenerator.array(() => ({
                    name: TestRandomGenerator.string(),
                    rank: TestRandomGenerator.integer(1, 3),
                    body: TestRandomGenerator.string(),
                })),
            })),
        };
    }

    export function trail(): ArraySimplePointer {
        const data = generate();
        const hobbies = data.value.at(-1)!.hobbies;
        hobbies[hobbies.length - 1] = {} as any;
        return data;
    }

    export const SPOILERS: Spoiler<ArraySimplePointer>[] = [
        (input) => {
            input.value[0].name = false as any;
            return ["$input.value[0].name"];
        },
        (input) => {
            input.value[0].email = ["a", "b"] as any;
            return ["$input.value[0].email"];
        },
        (input) => {
            input.value[0].hobbies = false as any;
            return ["$input.value[0].hobbies"];
        },
        (input) => {
            input.value[0].hobbies = [
                {
                    name: "name",
                    rank: "best" as any as number,
                    body: "something",
                },
            ];
            return ["$input.value[0].hobbies[0].rank"];
        },
        (input) => {
            input.value[0].hobbies = [
                {
                    name: "name",
                    rank: 3,
                    body: 3 as any,
                },
            ];
            return ["$input.value[0].hobbies[0].body"];
        },
        (input) => {
            input.value[1] = null!;
            return ["$input.value[1]"];
        },
    ];
}
