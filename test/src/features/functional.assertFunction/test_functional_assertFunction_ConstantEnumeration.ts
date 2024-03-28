import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_functional_assertFunction_ConstantEnumeration =
  _test_functional_assertFunction(TypeGuardError)("ConstantEnumeration")(
    ConstantEnumeration,
  )((p: (input: ConstantEnumeration) => ConstantEnumeration) =>
    typia.functional.assertFunction(p),
  );
