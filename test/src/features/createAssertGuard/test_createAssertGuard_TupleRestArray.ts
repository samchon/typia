import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TupleRestArray } from "../../structures/TupleRestArray";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_TupleRestArray = _test_assertGuard(TypeGuardError)(
    "TupleRestArray",
)<TupleRestArray>(
    TupleRestArray
)(typia.createAssertGuard<TupleRestArray>());
