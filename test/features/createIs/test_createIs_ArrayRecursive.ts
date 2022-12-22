import typia from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ArrayRecursive = _test_is(
    "ArrayRecursive",
    ArrayRecursive.generate,
    typia.createIs<ArrayRecursive>(),
    ArrayRecursive.SPOILERS,
);
