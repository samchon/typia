import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_functional_assertFunctionCustom_ConstantConstEnumeration =
  _test_functional_assertFunction(CustomGuardError)("ConstantConstEnumeration")(
    ConstantConstEnumeration,
  )((p: (input: ConstantConstEnumeration) => ConstantConstEnumeration) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
