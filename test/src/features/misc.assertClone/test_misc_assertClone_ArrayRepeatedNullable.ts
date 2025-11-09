import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_misc_assertClone_ArrayRepeatedNullable = (): void =>
  _test_misc_assertClone(TypeGuardError)(
    "ArrayRepeatedNullable",
  )<ArrayRepeatedNullable>(ArrayRepeatedNullable)((input) =>
    typia.misc.assertClone<ArrayRepeatedNullable>(input),
  );
