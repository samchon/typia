import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_createAssertPrune_TupleHierarchical = _test_assertPrune(
    "TupleHierarchical",
    TupleHierarchical.generate,
    typia.createAssertPrune<TupleHierarchical>(),
    TupleHierarchical.SPOILERS,
);
