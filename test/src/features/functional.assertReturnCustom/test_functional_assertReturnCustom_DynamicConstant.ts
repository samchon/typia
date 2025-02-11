import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_assertReturnCustom_DynamicConstant =
  _test_functional_assertReturn(CustomGuardError)("DynamicConstant")(
    DynamicConstant,
  )((p: (input: DynamicConstant) => DynamicConstant) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
