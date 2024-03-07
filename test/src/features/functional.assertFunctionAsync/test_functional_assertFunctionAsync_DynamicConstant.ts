import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { DynamicConstant } from "../../structures/DynamicConstant";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_DynamicConstant =
  _test_functional_assertFunctionAsync(TypeGuardError)("DynamicConstant")(
    DynamicConstant,
  )((p: (input: DynamicConstant) => Promise<DynamicConstant>) =>
    typia.functional.assertFunction(p),
  );
