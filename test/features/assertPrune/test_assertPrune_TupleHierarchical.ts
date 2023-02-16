import typia from "typia";

import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_TupleHierarchical = _test_assertPrune(
    "TupleHierarchical",
    TupleHierarchical.generate,
    (input) => typia.assertPrune(input),
    TupleHierarchical.SPOILERS,
);
