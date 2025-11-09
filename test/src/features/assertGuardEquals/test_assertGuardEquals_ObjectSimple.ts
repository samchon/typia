import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectSimple } from "../../structures/ObjectSimple";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_ObjectSimple = (): void => _test_assertGuardEquals(TypeGuardError)(
    "ObjectSimple",
)<ObjectSimple>(
    ObjectSimple
)((input) => typia.assertGuardEquals<ObjectSimple>(input));
