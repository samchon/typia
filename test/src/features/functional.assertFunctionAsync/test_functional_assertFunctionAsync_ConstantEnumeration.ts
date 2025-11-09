import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_functional_assertFunctionAsync_ConstantEnumeration =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("ConstantEnumeration")(
      ConstantEnumeration,
    )((p: (input: ConstantEnumeration) => Promise<ConstantEnumeration>) =>
      typia.functional.assertFunction(p),
    );
