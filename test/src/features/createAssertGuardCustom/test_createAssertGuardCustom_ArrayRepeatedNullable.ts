import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ArrayRepeatedNullable =
  _test_assertGuard(CustomGuardError)(
    "ArrayRepeatedNullable",
  )<ArrayRepeatedNullable>(ArrayRepeatedNullable)(
    typia.createAssertGuard<ArrayRepeatedNullable>(
      (p) => new CustomGuardError(p),
    ),
  );
