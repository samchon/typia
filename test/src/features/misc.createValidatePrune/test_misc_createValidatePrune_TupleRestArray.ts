import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_misc_createValidatePrune_TupleRestArray = (): void => _test_misc_validatePrune(
    "TupleRestArray",
)<TupleRestArray>(
    TupleRestArray
)(typia.misc.createValidatePrune<TupleRestArray>());
