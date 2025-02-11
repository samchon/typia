import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_functional_assertReturnAsyncCustom_ConstantEnumeration =
  _test_functional_assertReturnAsync(CustomGuardError)("ConstantEnumeration")(
    ConstantEnumeration,
  )((p: (input: ConstantEnumeration) => Promise<ConstantEnumeration>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
