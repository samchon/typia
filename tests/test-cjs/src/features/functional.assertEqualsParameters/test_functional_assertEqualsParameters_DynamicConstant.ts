import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_assertEqualsParameters_DynamicConstant =
  (): void =>
    _test_functional_assertEqualsParameters(TypeGuardError)("DynamicConstant")(
      DynamicConstant,
    )((p: (input: DynamicConstant) => DynamicConstant) =>
      typia.functional.assertEqualsParameters(p),
    );
