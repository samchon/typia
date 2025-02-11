import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_functional_assertReturnAsync_ConstantEnumeration =
  _test_functional_assertReturnAsync(TypeGuardError)("ConstantEnumeration")(
    ConstantEnumeration,
  )((p: (input: ConstantEnumeration) => Promise<ConstantEnumeration>) =>
    typia.functional.assertReturn(p),
  );
