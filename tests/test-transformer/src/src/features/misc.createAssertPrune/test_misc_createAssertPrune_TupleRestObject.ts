import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TupleRestObject } from "../../structures/TupleRestObject";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_TupleRestObject = (): void => _test_misc_assertPrune(TypeGuardError)(
    "TupleRestObject",
)<TupleRestObject>(
    TupleRestObject
)(typia.misc.createAssertPrune<TupleRestObject>());
