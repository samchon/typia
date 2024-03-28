import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_createAssertGuardEqualsCustom_DynamicConstant =
  _test_assertGuardEquals(CustomGuardError)("DynamicConstant")<DynamicConstant>(
    DynamicConstant,
  )(
    typia.createAssertGuardEquals<DynamicConstant>(
      (p) => new CustomGuardError(p),
    ),
  );
