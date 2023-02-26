import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_clone_ArrayRecursive = _test_clone(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) => typia.clone(input),
);
