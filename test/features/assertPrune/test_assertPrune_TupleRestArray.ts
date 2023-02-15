import typia from "typia";

import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_TupleRestArray = _test_assertPrune(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => typia.assertPrune(input),
    TupleRestArray.SPOILERS,
);
