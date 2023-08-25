import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export interface CommentTagTuple {
    /**
     * @minItems 3
     * @maxItems 7
     * @minimum 3
     * @maximum 7
     * @minLength 3
     * @maxLength 7
     */
    tuple: [string, number, string[], number[]];
}
export namespace CommentTagTuple {
    export function generate(): CommentTagTuple {
        return {
            tuple: ["123", 3, ["123", "234", "345"], [3, 4, 5, 6, 7]],
        };
    }

    export const SPOILERS: Spoiler<CommentTagTuple>[] = [
        (input) => {
            input.tuple[0] = "12";
            return ["$input.tuple[0]"];
        },
        (input) => {
            input.tuple[0] = "12345678";
            return ["$input.tuple[0]"];
        },
        (input) => {
            input.tuple[1] = 2;
            return ["$input.tuple[1]"];
        },
        (input) => {
            input.tuple[1] = 8;
            return ["$input.tuple[1]"];
        },
        (input) => {
            input.tuple[2][0] = "12";
            return ["$input.tuple[2][0]"];
        },
        (input) => {
            input.tuple[2][0] = "12345678";
            return ["$input.tuple[2][0]"];
        },
        (input) => {
            input.tuple[2] = TestRandomGenerator.array(() => "123", 2);
            return ["$input.tuple[2]"];
        },
        (input) => {
            input.tuple[2] = TestRandomGenerator.array(() => "123", 8);
            return ["$input.tuple[2]"];
        },
        (input) => {
            input.tuple[3][0] = 2;
            return ["$input.tuple[3][0]"];
        },
        (input) => {
            input.tuple[3] = TestRandomGenerator.array(() => 3, 2);
            return ["$input.tuple[3]"];
        },
        (input) => {
            input.tuple[3] = TestRandomGenerator.array(() => 3, 8);
            return ["$input.tuple[3]"];
        },
    ];

    export const BINARABLE = false;
}
