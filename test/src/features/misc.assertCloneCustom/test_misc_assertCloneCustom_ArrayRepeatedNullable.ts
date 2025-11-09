import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_misc_assertCloneCustom_ArrayRepeatedNullable = (): void =>
  _test_misc_assertClone(CustomGuardError)(
    "ArrayRepeatedNullable",
  )<ArrayRepeatedNullable>(ArrayRepeatedNullable)((input) =>
    typia.misc.assertClone<ArrayRepeatedNullable>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
