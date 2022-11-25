import TSON from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_ArrayMatrix = _test_equals(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input) => TSON.equals(input),
);