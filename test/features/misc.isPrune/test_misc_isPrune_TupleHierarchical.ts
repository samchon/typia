import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_misc_isPrune_TupleHierarchical = _test_misc_isPrune(
    "TupleHierarchical",
    TupleHierarchical.generate,
    (input) => typia.misc.isPrune(input),
    TupleHierarchical.SPOILERS,
);
