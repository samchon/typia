import { RandomGenerator } from "../internal/RandomGenerator";

export type IArraySimple = IArraySimple.IPerson[];

export namespace IArraySimple {
    export interface IPerson {
        name: string;
        email: string;
        hobbies: string | string[] | Array<IHobby>;
    }
    export interface IHobby {
        name: string;
        rank: number;
    }

    export function generate(): IArraySimple {
        return RandomGenerator.array((index) => ({
            name: RandomGenerator.string(),
            email: RandomGenerator.string(),
            hobbies:
                index === 0
                    ? RandomGenerator.string()
                    : index === 1
                    ? RandomGenerator.array(RandomGenerator.string)
                    : RandomGenerator.array(() => ({
                          name: RandomGenerator.string(),
                          rank: RandomGenerator.number(1, 3),
                      })),
        }));
    }
}
