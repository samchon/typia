import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_prune_ArrayHierarchical = _test_prune(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) => typia.prune<ArrayHierarchical>(input),
);
