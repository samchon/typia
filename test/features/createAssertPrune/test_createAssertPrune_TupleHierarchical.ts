import typia from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_createAssertPrune_TupleHierarchical = _test_assertPrune(
    "TupleHierarchical",
    TupleHierarchical.generate,
    typia.createAssertPrune<TupleHierarchical>(),
    TupleHierarchical.SPOILERS,
);
