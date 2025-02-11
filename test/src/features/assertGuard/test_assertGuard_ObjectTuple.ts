import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_assertGuard_ObjectTuple = _test_assertGuard(TypeGuardError)(
  "ObjectTuple",
)<ObjectTuple>(ObjectTuple)((input) => typia.assertGuard<ObjectTuple>(input));
