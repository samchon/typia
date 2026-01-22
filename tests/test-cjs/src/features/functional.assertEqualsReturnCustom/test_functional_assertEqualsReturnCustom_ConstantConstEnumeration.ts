import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_functional_assertEqualsReturnCustom_ConstantConstEnumeration =
  (): void =>
    _test_functional_assertEqualsReturn(CustomGuardError)(
      "ConstantConstEnumeration",
    )(ConstantConstEnumeration)(
      (p: (input: ConstantConstEnumeration) => ConstantConstEnumeration) =>
        typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
