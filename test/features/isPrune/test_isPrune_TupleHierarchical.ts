import typia from "typia";

import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_TupleHierarchical = _test_isPrune(
    "TupleHierarchical",
    TupleHierarchical.generate,
    (input) => typia.isPrune(input),
    TupleHierarchical.SPOILERS,
);
