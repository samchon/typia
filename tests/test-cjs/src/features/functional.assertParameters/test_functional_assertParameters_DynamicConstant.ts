import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_assertParameters_DynamicConstant = (): void =>
  _test_functional_assertParameters(TypeGuardError)("DynamicConstant")(
    DynamicConstant,
  )((p: (input: DynamicConstant) => DynamicConstant) =>
    typia.functional.assertParameters(p),
  );
