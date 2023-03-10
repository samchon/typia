import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_isClone_ArrayRecursive = _test_isClone(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) => typia.isClone(input),
    ArrayRecursive.SPOILERS,
);
