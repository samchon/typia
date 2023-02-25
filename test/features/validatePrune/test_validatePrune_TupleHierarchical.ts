import typia from "../../../src";

import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_TupleHierarchical = _test_validatePrune(
    "TupleHierarchical",
    TupleHierarchical.generate,
    (input) => typia.validatePrune(input),
    TupleHierarchical.SPOILERS,
);
