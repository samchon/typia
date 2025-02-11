import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_createAssertGuard_ObjectGenericUnion = _test_assertGuard(
  TypeGuardError,
)("ObjectGenericUnion")<ObjectGenericUnion>(ObjectGenericUnion)(
  typia.createAssertGuard<ObjectGenericUnion>(),
);
