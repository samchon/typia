import TSON from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ArrayMatrix = _test_stringify(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input) => TSON.stringify(input),
);