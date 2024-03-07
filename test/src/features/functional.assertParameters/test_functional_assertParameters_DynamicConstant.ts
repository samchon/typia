import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { DynamicConstant } from "../../structures/DynamicConstant";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_DynamicConstant =
  _test_functional_assertParameters(TypeGuardError)("DynamicConstant")(
    DynamicConstant,
  )((p: (input: DynamicConstant) => DynamicConstant) =>
    typia.functional.assertParameters(p),
  );
