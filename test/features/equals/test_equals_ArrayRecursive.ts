import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_equals_ArrayRecursive = _test_equals(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) => typia.equals<ArrayRecursive>(input),
);
