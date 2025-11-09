import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_createAssertGuard_ObjectGeneric = (): void =>
  _test_assertGuard(TypeGuardError)("ObjectGeneric")<ObjectGeneric>(
    ObjectGeneric,
  )(typia.createAssertGuard<ObjectGeneric>());
