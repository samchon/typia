import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_ObjectPrimitive = _test_assertGuardEquals(TypeGuardError)(
    "ObjectPrimitive",
)<ObjectPrimitive>(
    ObjectPrimitive
)(typia.createAssertGuardEquals<ObjectPrimitive>());
