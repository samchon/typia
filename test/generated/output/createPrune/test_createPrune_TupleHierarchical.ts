import typia from "../../../../src";
import { TupleHierarchical } from "../../../structures/TupleHierarchical";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_TupleHierarchical = _test_prune(
    "TupleHierarchical",
    TupleHierarchical.generate,
    (input: TupleHierarchical): void => {},
);
