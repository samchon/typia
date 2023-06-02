import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_createIsStringify_ArrayRecursive = _test_isStringify(
    "ArrayRecursive",
    ArrayRecursive.generate,
    typia.createIsStringify<ArrayRecursive>(),
    ArrayRecursive.SPOILERS,
);
