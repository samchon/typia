import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleRestObject } from "../../structures/TupleRestObject";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_TupleRestObject = _test_assertGuardEquals(TypeGuardError)(
    "TupleRestObject",
)<TupleRestObject>(
    TupleRestObject
)((input) => typia.assertGuardEquals<TupleRestObject>(input));
