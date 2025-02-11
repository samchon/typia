import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_functional_assertReturnAsyncCustom_ConstantConstEnumeration =
  _test_functional_assertReturnAsync(CustomGuardError)(
    "ConstantConstEnumeration",
  )(ConstantConstEnumeration)(
    (
      p: (input: ConstantConstEnumeration) => Promise<ConstantConstEnumeration>,
    ) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
