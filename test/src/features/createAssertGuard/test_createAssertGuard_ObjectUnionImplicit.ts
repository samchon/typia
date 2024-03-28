import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_createAssertGuard_ObjectUnionImplicit = _test_assertGuard(
  TypeGuardError,
)("ObjectUnionImplicit")<ObjectUnionImplicit>(ObjectUnionImplicit)(
  typia.createAssertGuard<ObjectUnionImplicit>(),
);
