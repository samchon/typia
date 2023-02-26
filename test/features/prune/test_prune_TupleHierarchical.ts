import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_prune_TupleHierarchical = _test_prune(
    "TupleHierarchical",
    TupleHierarchical.generate,
    (input) => typia.prune(input),
);
