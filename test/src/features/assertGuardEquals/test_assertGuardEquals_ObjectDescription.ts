import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectDescription } from "../../structures/ObjectDescription";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_ObjectDescription = _test_assertGuardEquals(
  TypeGuardError,
)("ObjectDescription")<ObjectDescription>(ObjectDescription)((input) =>
  typia.assertGuardEquals<ObjectDescription>(input),
);
