import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_createIsClone_ArrayRecursive = _test_isClone(
    "ArrayRecursive",
    ArrayRecursive.generate,
    typia.createIsClone<ArrayRecursive>(),
    ArrayRecursive.SPOILERS,
);
