import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_TupleRestAtomic = (): void => _test_misc_assertPrune(TypeGuardError)(
    "TupleRestAtomic",
)<TupleRestAtomic>(
    TupleRestAtomic
)(typia.misc.createAssertPrune<TupleRestAtomic>());
