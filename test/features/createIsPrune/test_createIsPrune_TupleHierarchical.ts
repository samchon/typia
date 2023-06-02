import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_createIsPrune_TupleHierarchical = _test_isPrune(
    "TupleHierarchical",
    TupleHierarchical.generate,
    typia.createIsPrune<TupleHierarchical>(),
    TupleHierarchical.SPOILERS,
);
