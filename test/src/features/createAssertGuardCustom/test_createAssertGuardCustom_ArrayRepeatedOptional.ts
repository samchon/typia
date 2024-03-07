import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ArrayRepeatedOptional =
  _test_assertGuard(CustomGuardError)(
    "ArrayRepeatedOptional",
  )<ArrayRepeatedOptional>(ArrayRepeatedOptional)(
    typia.createAssertGuard<ArrayRepeatedOptional>(
      (p) => new CustomGuardError(p),
    ),
  );
