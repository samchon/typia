import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectTuple } from "../../structures/ObjectTuple";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_ObjectTuple = _test_assertGuardEquals(TypeGuardError)(
    "ObjectTuple",
)<ObjectTuple>(
    ObjectTuple
)((input) => typia.assertGuardEquals<ObjectTuple>(input));
