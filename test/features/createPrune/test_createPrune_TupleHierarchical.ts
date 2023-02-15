import typia from "typia";

import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_TupleHierarchical = _test_prune(
    "TupleHierarchical",
    TupleHierarchical.generate,
    typia.createPrune<TupleHierarchical>(),
);
