import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_assertEqualsReturnCustom_DynamicConstant =
  _test_functional_assertEqualsReturn(CustomGuardError)("DynamicConstant")(
    DynamicConstant,
  )((p: (input: DynamicConstant) => DynamicConstant) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
