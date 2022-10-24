import TSON from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_array_matrix = _test_stringify(
    "array matrix",
    ArrayMatrix.generate,
    (input) => TSON.stringify(input),
);
