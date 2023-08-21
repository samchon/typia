import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_misc_isClone_ArrayRecursive = _test_misc_isClone(
    "ArrayRecursive",
)<ArrayRecursive>(ArrayRecursive)((input) =>
    typia.misc.isClone<ArrayRecursive>(input),
);
