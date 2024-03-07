import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnAsyncCustom_ConstantEnumeration =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)(
    "ConstantEnumeration",
  )(ConstantEnumeration)(
    (p: (input: ConstantEnumeration) => Promise<ConstantEnumeration>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
