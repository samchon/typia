import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_functional_assertReturn_ConstantEnumeration =
  _test_functional_assertReturn(TypeGuardError)("ConstantEnumeration")(
    ConstantEnumeration,
  )((p: (input: ConstantEnumeration) => ConstantEnumeration) =>
    typia.functional.assertReturn(p),
  );
