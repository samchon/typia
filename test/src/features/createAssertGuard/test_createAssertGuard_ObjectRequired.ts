import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_createAssertGuard_ObjectRequired = (): void =>
  _test_assertGuard(TypeGuardError)("ObjectRequired")<ObjectRequired>(
    ObjectRequired,
  )(typia.createAssertGuard<ObjectRequired>());
