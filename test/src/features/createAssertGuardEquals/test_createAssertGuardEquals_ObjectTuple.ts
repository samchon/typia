import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectTuple } from "../../structures/ObjectTuple";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_ObjectTuple = (): void => _test_assertGuardEquals(TypeGuardError)(
    "ObjectTuple",
)<ObjectTuple>(
    ObjectTuple
)(typia.createAssertGuardEquals<ObjectTuple>());
