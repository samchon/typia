import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_functional_assertEqualsReturnAsync_ConstantAtomicWrapper =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)(
      "ConstantAtomicWrapper",
    )(ConstantAtomicWrapper)(
      (p: (input: ConstantAtomicWrapper) => Promise<ConstantAtomicWrapper>) =>
        typia.functional.assertEqualsReturn(p),
    );
