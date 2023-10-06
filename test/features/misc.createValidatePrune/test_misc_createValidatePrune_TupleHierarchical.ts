import typia from "../../../src";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_misc_createValidatePrune_TupleHierarchical = _test_misc_validatePrune(
    "TupleHierarchical",
)<TupleHierarchical>(
    TupleHierarchical
)(typia.misc.createValidatePrune<TupleHierarchical>());
