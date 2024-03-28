import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_misc_createAssertCloneCustom_ArrayRepeatedNullable =
  _test_misc_assertClone(CustomGuardError)(
    "ArrayRepeatedNullable",
  )<ArrayRepeatedNullable>(ArrayRepeatedNullable)(
    typia.misc.createAssertClone<ArrayRepeatedNullable>(
      (p) => new CustomGuardError(p),
    ),
  );
