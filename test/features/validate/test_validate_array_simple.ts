import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_validate } from "./_test_validate";

export const test_validate_array_simple = _test_validate(
    "simple array",
    ArraySimple.generate,
    (input) => TSON.validate(input),
    [
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
            return ["$input[0].hobbies"];
        },
        (input) => {
            input[1] = null!;
            return ["$input[1]"];
        },
    ],
);
