import typia from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ArrayRecursive = _test_clone(
    "ArrayRecursive",
    ArrayRecursive.generate,
    typia.createClone<ArrayRecursive>(),
);