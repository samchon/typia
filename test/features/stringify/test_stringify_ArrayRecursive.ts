import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_stringify_ArrayRecursive = _test_stringify(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) => typia.stringify(input),
);
