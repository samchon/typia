import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_misc_validatePrune_TupleRestArray = (): void => _test_misc_validatePrune(
    "TupleRestArray",
)<TupleRestArray>(
    TupleRestArray
)((input) => typia.misc.validatePrune<TupleRestArray>(input));
