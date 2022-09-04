import { RandomGenerator } from "../internal/RandomGenerator";

export type ArraySimple = ArraySimple.IPerson[];
export namespace ArraySimple {
    export interface IPerson {
        name: string;
        email: string;
        hobbies: Array<IHobby> | Array<IContent> | string[];
    }
    export interface IHobby {
        name: string;
        rank: number;
    }
    export interface IContent {
        body: string;
    }

    export function generate(): ArraySimple {
        return RandomGenerator.array((index) => ({
            name: RandomGenerator.string(),
            email: RandomGenerator.string(),
            hobbies:
                index === 0
                    ? RandomGenerator.array(RandomGenerator.string)
                    : index === 1
                    ? RandomGenerator.array(() => ({
                          body: RandomGenerator.string(),
                      }))
                    : RandomGenerator.array(() => ({
                          name: RandomGenerator.string(),
                          rank: RandomGenerator.integer(1, 3),
                      })),
        }));
    }
}
