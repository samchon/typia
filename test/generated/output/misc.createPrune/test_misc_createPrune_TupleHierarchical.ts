import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { TupleHierarchical } from "../../../structures/TupleHierarchical";

export const test_misc_prune_TupleHierarchical = _test_misc_prune(
    "TupleHierarchical",
)<TupleHierarchical>(TupleHierarchical)((input: TupleHierarchical): void => {});
