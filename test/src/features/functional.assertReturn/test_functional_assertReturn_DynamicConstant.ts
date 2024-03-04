import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_assertReturn_DynamicConstant =
  _test_functional_assertReturn(TypeGuardError)("DynamicConstant")(
    DynamicConstant,
  )((p: (input: DynamicConstant) => DynamicConstant) =>
    typia.functional.assertReturn(p),
  );
