import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_functional_assertEqualsReturnAsyncCustom_ConstantConstEnumeration =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)(
    "ConstantConstEnumeration",
  )(ConstantConstEnumeration)(
    (
      p: (input: ConstantConstEnumeration) => Promise<ConstantConstEnumeration>,
    ) => typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
