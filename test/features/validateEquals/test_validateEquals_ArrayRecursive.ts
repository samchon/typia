import typia from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_ArrayRecursive = _test_validateEquals(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) => typia.validateEquals(input),
);
