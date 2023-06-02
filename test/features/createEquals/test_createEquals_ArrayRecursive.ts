import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_createEquals_ArrayRecursive = _test_equals(
    "ArrayRecursive",
    ArrayRecursive.generate,
    typia.createEquals<ArrayRecursive>(),
);
