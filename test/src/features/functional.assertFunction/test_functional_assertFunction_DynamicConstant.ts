import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_assertFunction_DynamicConstant =
  _test_functional_assertFunction(TypeGuardError)("DynamicConstant")(
    DynamicConstant,
  )((p: (input: DynamicConstant) => DynamicConstant) =>
    typia.functional.assertFunction(p),
  );
