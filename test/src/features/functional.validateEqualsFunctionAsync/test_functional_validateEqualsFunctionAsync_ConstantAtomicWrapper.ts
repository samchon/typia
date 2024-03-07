import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_functional_validateEqualsFunctionAsync_ConstantAtomicWrapper =
  _test_functional_validateEqualsFunctionAsync("ConstantAtomicWrapper")(
    ConstantAtomicWrapper,
  )((p: (input: ConstantAtomicWrapper) => Promise<ConstantAtomicWrapper>) =>
    typia.functional.validateEqualsFunction(p),
  );
