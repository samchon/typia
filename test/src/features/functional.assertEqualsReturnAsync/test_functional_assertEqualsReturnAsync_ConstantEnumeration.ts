import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_functional_assertEqualsReturnAsync_ConstantEnumeration =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)(
      "ConstantEnumeration",
    )(ConstantEnumeration)(
      (p: (input: ConstantEnumeration) => Promise<ConstantEnumeration>) =>
        typia.functional.assertEqualsReturn(p),
    );
