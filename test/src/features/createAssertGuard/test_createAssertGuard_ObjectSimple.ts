import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectSimple } from "../../structures/ObjectSimple";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_ObjectSimple = (): void => _test_assertGuard(TypeGuardError)(
    "ObjectSimple",
)<ObjectSimple>(
    ObjectSimple
)(typia.createAssertGuard<ObjectSimple>());
