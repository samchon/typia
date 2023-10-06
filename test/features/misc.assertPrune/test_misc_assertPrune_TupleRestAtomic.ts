import typia from "../../../src";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_misc_assertPrune_TupleRestAtomic = _test_misc_assertPrune(
    "TupleRestAtomic",
)<TupleRestAtomic>(
    TupleRestAtomic
)((input) => typia.misc.assertPrune<TupleRestAtomic>(input));
