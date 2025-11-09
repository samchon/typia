import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_assertEqualsFunctionCustom_DynamicConstant =
  (): void =>
    _test_functional_assertEqualsFunction(CustomGuardError)("DynamicConstant")(
      DynamicConstant,
    )((p: (input: DynamicConstant) => DynamicConstant) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
