import TSON from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ArrayMatrix = _test_isStringify(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input) => TSON.isStringify(input),
    ArrayMatrix.SPOILERS,
);