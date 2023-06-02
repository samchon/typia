import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_assertPrune_TupleHierarchical = _test_assertPrune(
    "TupleHierarchical",
    TupleHierarchical.generate,
    (input) => typia.assertPrune(input),
    TupleHierarchical.SPOILERS,
);
