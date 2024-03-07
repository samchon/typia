import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnAsyncCustom_ConstantAtomicWrapper =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)(
    "ConstantAtomicWrapper",
  )(ConstantAtomicWrapper)(
    (p: (input: ConstantAtomicWrapper) => Promise<ConstantAtomicWrapper>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
