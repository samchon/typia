import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_assertEqualsReturn_DynamicConstant = (): void =>
  _test_functional_assertEqualsReturn(TypeGuardError)("DynamicConstant")(
    DynamicConstant,
  )((p: (input: DynamicConstant) => DynamicConstant) =>
    typia.functional.assertEqualsReturn(p),
  );
