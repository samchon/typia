import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicNever } from "../../structures/DynamicNever";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_DynamicNever = _test_misc_assertClone(
  TypeGuardError,
)("DynamicNever")<DynamicNever>(DynamicNever)(
  typia.misc.createAssertClone<DynamicNever>(),
);
