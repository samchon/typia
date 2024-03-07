import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_ArrayRepeatedNullable =
  _test_misc_assertClone(TypeGuardError)(
    "ArrayRepeatedNullable",
  )<ArrayRepeatedNullable>(ArrayRepeatedNullable)(
    typia.misc.createAssertClone<ArrayRepeatedNullable>(),
  );
