import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_functional_assertEqualsReturnCustom_ConstantEnumeration =
  (): void =>
    _test_functional_assertEqualsReturn(CustomGuardError)(
      "ConstantEnumeration",
    )(ConstantEnumeration)(
      (p: (input: ConstantEnumeration) => ConstantEnumeration) =>
        typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
