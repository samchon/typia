import typia from "typia";

import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_TupleRestArray = _test_validatePrune(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => typia.validatePrune(input),
    TupleRestArray.SPOILERS,
);
