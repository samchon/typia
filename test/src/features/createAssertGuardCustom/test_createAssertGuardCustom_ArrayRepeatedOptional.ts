import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_createAssertGuardCustom_ArrayRepeatedOptional = (): void =>
  _test_assertGuard(CustomGuardError)(
    "ArrayRepeatedOptional",
  )<ArrayRepeatedOptional>(ArrayRepeatedOptional)(
    typia.createAssertGuard<ArrayRepeatedOptional>(
      (p) => new CustomGuardError(p),
    ),
  );
