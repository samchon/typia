import typia from "typia";

import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_TupleRestAtomic = _test_assertPrune(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) => typia.assertPrune(input),
    TupleRestAtomic.SPOILERS,
);
