import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_functional_assertEqualsFunctionAsyncCustom_ConstantEnumeration =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "ConstantEnumeration",
  )(ConstantEnumeration)(
    (p: (input: ConstantEnumeration) => Promise<ConstantEnumeration>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
