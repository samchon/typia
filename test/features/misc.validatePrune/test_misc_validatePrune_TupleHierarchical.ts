import typia from "../../../src";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_misc_validatePrune_TupleHierarchical = _test_misc_validatePrune(
    "TupleHierarchical",
)<TupleHierarchical>(
    TupleHierarchical
)((input) => typia.misc.validatePrune<TupleHierarchical>(input));
