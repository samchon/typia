import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_functional_validateFunctionAsync_ConstantEnumeration =
  _test_functional_validateFunctionAsync("ConstantEnumeration")(
    ConstantEnumeration,
  )((p: (input: ConstantEnumeration) => Promise<ConstantEnumeration>) =>
    typia.functional.validateFunction(p),
  );
