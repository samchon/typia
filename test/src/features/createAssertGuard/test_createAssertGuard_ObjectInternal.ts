import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectInternal } from "../../structures/ObjectInternal";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_ObjectInternal = _test_assertGuard(
  TypeGuardError,
)("ObjectInternal")<ObjectInternal>(ObjectInternal)(
  typia.createAssertGuard<ObjectInternal>(),
);
