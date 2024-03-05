import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_assertGuard_ObjectGeneric = _test_assertGuard(TypeGuardError)(
  "ObjectGeneric",
)<ObjectGeneric>(ObjectGeneric)((input) =>
  typia.assertGuard<ObjectGeneric>(input),
);
