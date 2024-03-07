import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_ObjectGeneric = _test_assertGuard(
  TypeGuardError,
)("ObjectGeneric")<ObjectGeneric>(ObjectGeneric)(
  typia.createAssertGuard<ObjectGeneric>(),
);
