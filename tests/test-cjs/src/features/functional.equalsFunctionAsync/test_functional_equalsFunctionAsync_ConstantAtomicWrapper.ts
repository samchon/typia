import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_functional_equalsFunctionAsync_ConstantAtomicWrapper =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("ConstantAtomicWrapper")(
      ConstantAtomicWrapper,
    )((p: (input: ConstantAtomicWrapper) => Promise<ConstantAtomicWrapper>) =>
      typia.functional.equalsFunction(p),
    );
