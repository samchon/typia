import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

import { TypeGuardError } from "typia";

export const test_misc_assertPrune_ObjectHttpNullable = _test_misc_assertPrune(
  TypeGuardError,
)("ObjectHttpNullable")<ObjectHttpNullable>(ObjectHttpNullable)((input) =>
  typia.misc.assertPrune<ObjectHttpNullable>(input),
);
