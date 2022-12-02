import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ArrayRecursive = _test_isStringify(
    "ArrayRecursive",
    ArrayRecursive.generate,
    TSON.createIsStringify<ArrayRecursive>(),
    ArrayRecursive.SPOILERS,
);
