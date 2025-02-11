import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectDate } from "../../structures/ObjectDate";

import { TypeGuardError } from "typia";

export const test_assertGuard_ObjectDate = _test_assertGuard(TypeGuardError)(
    "ObjectDate",
)<ObjectDate>(
    ObjectDate
)((input) => typia.assertGuard<ObjectDate>(input));
