import TSON from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_validate } from "./_test_validate";

export const test_validate_array_matrix = _test_validate(
    "array matrix",
    ArrayMatrix.generate,
    (input) => TSON.validate(input),
    [
        (input) => {
            input[0][0][0] = "number" as any;
            return ["$input[0][0][0]"];
        },
        (input) => {
            input[0][0] = "number[]" as any;
            return ["$input[0][0]"];
        },
        (input) => {
            input[0][0] = { length: 0 } as any;
            return ["$input[0][0]"];
        },
    ],
);
