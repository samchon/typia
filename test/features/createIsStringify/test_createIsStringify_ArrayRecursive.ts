import typia from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ArrayRecursive = _test_isStringify(
    "ArrayRecursive",
    ArrayRecursive.generate,
    typia.createIsStringify<ArrayRecursive>(),
    ArrayRecursive.SPOILERS,
);