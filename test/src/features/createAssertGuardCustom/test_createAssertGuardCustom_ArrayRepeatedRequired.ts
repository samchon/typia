import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_createAssertGuardCustom_ArrayRepeatedRequired =
  _test_assertGuard(CustomGuardError)(
    "ArrayRepeatedRequired",
  )<ArrayRepeatedRequired>(ArrayRepeatedRequired)(
    typia.createAssertGuard<ArrayRepeatedRequired>(
      (p) => new CustomGuardError(p),
    ),
  );
