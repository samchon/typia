import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ArrayRecursive = _test_validateClone(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) => TSON.validateClone(input),
    ArrayRecursive.SPOILERS,
);
