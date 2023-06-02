import typia from "../../../src";

import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_validatePrune } from "../../internal/_test_validatePrune";

export const test_createValidatePrune_TupleHierarchical = _test_validatePrune(
    "TupleHierarchical",
    TupleHierarchical.generate,
    typia.createValidatePrune<TupleHierarchical>(),
    TupleHierarchical.SPOILERS,
);
