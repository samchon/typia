import typia from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ArrayRecursive = _test_validateClone(
    "ArrayRecursive",
    ArrayRecursive.generate,
    typia.createValidateClone<ArrayRecursive>(),
    ArrayRecursive.SPOILERS,
);
