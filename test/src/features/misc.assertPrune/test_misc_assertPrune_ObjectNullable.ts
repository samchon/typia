import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectNullable } from "../../structures/ObjectNullable";

import { TypeGuardError } from "typia";

export const test_misc_assertPrune_ObjectNullable = _test_misc_assertPrune(
  TypeGuardError,
)("ObjectNullable")<ObjectNullable>(ObjectNullable)((input) =>
  typia.misc.assertPrune<ObjectNullable>(input),
);
