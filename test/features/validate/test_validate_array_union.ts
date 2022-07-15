import TSON from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_validate } from "./_test_validate";

export const test_validate_array_union = _test_validate(
    "union arrray",
    ArrayUnion.generate,
    (input) => TSON.validate(input),
    [
        (input) => {
            input[0] = [false, true, 3] as boolean[];
            return ["$input[0]"];
        },
        (input) => {
            input[1] = [1, 2, false] as number[];
            return ["$input[1]"];
        },
        (input) => {
            input[2] = ["a", "b", 3] as string[];
            return ["$input[2]"];
        },
        (input) => {
            input[0] = [[]] as any;
            return ["$input[0]"];
        },
        (input) => {
            input[1] = [null!];
            return ["$input[1]"];
        },
    ],
);
