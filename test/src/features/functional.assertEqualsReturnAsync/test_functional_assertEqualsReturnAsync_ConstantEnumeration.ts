import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_ConstantEnumeration =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)(
    "ConstantEnumeration",
  )(ConstantEnumeration)(
    (p: (input: ConstantEnumeration) => Promise<ConstantEnumeration>) =>
      typia.functional.assertEqualsReturn(p),
  );
