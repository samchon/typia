import { TestRandomGenerator } from "../internal/TestRandomGenerator";

import { Spoiler } from "../internal/Spoiler";

export type ArraySimple = ArraySimple.IPerson[];
export namespace ArraySimple {
    export interface IPerson {
        name: string;
        email: string;
        hobbies: IHobby[] | IContent[] | string[];
    }
    export interface IHobby {
        name: string;
        rank: number;
    }
    export interface IContent {
        body: string;
    }

    export function generate(): ArraySimple {
        return TestRandomGenerator.array((index) => ({
            name: TestRandomGenerator.string(),
            email: TestRandomGenerator.string(),
            hobbies:
                index === 0
                    ? TestRandomGenerator.array(TestRandomGenerator.string)
                    : index === 1
                    ? TestRandomGenerator.array(() => ({
                          body: TestRandomGenerator.string(),
                      }))
                    : TestRandomGenerator.array(() => ({
                          name: TestRandomGenerator.string(),
                          rank: TestRandomGenerator.integer(1, 3),
                      })),
        }));
    }

    export function trail(): ArraySimple {
        const data = generate();
        const hobbies = data[data.length - 1]!.hobbies;
        hobbies[hobbies.length - 1] = {} as any;
        return data;
    }

    export const SPOILERS: Spoiler<ArraySimple>[] = [
        (input) => {
            input[0].name = false as any;
            return ["$input[0].name"];
        },
        (input) => {
            input[0].email = ["a", "b"] as any;
            return ["$input[0].email"];
        },
        (input) => {
            input[0].hobbies = false as any;
            return ["$input[0].hobbies"];
        },
        (input) => {
            input[0].hobbies = [false, "something", 3] as any;
            return ["$input[0].hobbies"];
        },
        (input) => {
            input[0].hobbies = [
                {
                    name: "name",
                    rank: "best" as any as number,
                },
            ];
            return ["$input[0].hobbies"];
        },
        (input) => {
            input[0].hobbies = [
                {
                    body: 3 as any,
                },
            ];
            return ["$input[0].hobbies"];
        },
        (input) => {
            input[0].hobbies = [
                {
                    name: "name",
                    rank: 3,
                },
                {
                    body: "something",
                } as any,
            ];
            return ["$input[0].hobbies[1].name", "$input[0].hobbies[1].rank"];
        },
        (input) => {
            input[1] = null!;
            return ["$input[1]"];
        },
    ];
}
