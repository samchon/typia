import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_assertParametersCustom_DynamicConstant =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)("DynamicConstant")(
      DynamicConstant,
    )((p: (input: DynamicConstant) => DynamicConstant) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
