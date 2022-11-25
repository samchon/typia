import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ArrayRecursive = _test_isStringify(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) => TSON.isStringify(input),
    ArrayRecursive.SPOILERS,
);
