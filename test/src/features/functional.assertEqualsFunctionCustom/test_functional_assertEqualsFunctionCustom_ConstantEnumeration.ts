import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_functional_assertEqualsFunctionCustom_ConstantEnumeration =
  _test_functional_assertEqualsFunction(CustomGuardError)(
    "ConstantEnumeration",
  )(ConstantEnumeration)(
    (p: (input: ConstantEnumeration) => ConstantEnumeration) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
