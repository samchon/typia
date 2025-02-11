import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_assertFunctionCustom_DynamicConstant =
  _test_functional_assertFunction(CustomGuardError)("DynamicConstant")(
    DynamicConstant,
  )((p: (input: DynamicConstant) => DynamicConstant) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
