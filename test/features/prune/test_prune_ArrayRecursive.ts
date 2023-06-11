import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_prune_ArrayRecursive = _test_prune(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) => typia.prune(input),
);
