import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_functional_assertFunctionCustom_ConstantEnumeration =
  _test_functional_assertFunction(CustomGuardError)("ConstantEnumeration")(
    ConstantEnumeration,
  )((p: (input: ConstantEnumeration) => ConstantEnumeration) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
