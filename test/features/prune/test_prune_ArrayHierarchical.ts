import typia from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_ArrayHierarchical = _test_prune(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) => typia.prune(input),
);
