import typia from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ArrayRecursive = _test_validateClone(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) => typia.validateClone(input),
    ArrayRecursive.SPOILERS,
);