import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_is } from "./_test_is";

export const test_is_array_simple = _test_is(
    "simple array",
    ArraySimple.generate,
    (input) => TSON.is(input),
    [
        (input) => (input[0].name = false as any as string),
        (input) => (input[0].email = ["a", "b"] as any as string),
        (input) => (input[0].hobbies = false as any as any),
        (input) =>
            (input[0].hobbies = [false, "something", 3] as any as string[]),
        (input) =>
            (input[0].hobbies = [
                {
                    name: "name",
                    rank: "best" as any as number,
                },
            ]),
        (input) =>
            (input[0].hobbies = [
                {
                    body: 3 as any as string,
                },
            ]),
        (input) =>
            (input[0].hobbies = [
                {
                    name: "name",
                    rank: 3,
                },
                {
                    body: "something",
                } as any,
            ]),
        (input) => (input[1] = null!),
    ],
);
