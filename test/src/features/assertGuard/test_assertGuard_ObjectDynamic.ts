import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_assertGuard_ObjectDynamic = _test_assertGuard(TypeGuardError)(
  "ObjectDynamic",
)<ObjectDynamic>(ObjectDynamic)((input) =>
  typia.assertGuard<ObjectDynamic>(input),
);
