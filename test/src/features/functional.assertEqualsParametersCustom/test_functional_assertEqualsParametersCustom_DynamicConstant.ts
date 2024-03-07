import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { DynamicConstant } from "../../structures/DynamicConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_DynamicConstant =
  _test_functional_assertEqualsParameters(CustomGuardError)("DynamicConstant")(
    DynamicConstant,
  )((p: (input: DynamicConstant) => DynamicConstant) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
