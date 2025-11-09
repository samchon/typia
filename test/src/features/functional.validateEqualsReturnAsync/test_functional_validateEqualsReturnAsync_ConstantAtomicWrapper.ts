import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_functional_validateEqualsReturnAsync_ConstantAtomicWrapper =
  (): Promise<void> =>
    _test_functional_validateEqualsReturnAsync("ConstantAtomicWrapper")(
      ConstantAtomicWrapper,
    )((p: (input: ConstantAtomicWrapper) => Promise<ConstantAtomicWrapper>) =>
      typia.functional.validateEqualsReturn(p),
    );
