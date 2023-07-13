import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_misc_assertPrune_TupleHierarchical = _test_misc_assertPrune(
    "TupleHierarchical",
    TupleHierarchical.generate,
    typia.misc.createAssertPrune<TupleHierarchical>(),
    TupleHierarchical.SPOILERS,
);
