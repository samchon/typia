import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_functional_validateEqualsParametersAsync_ConstantAtomicWrapper =
  _test_functional_validateEqualsParametersAsync("ConstantAtomicWrapper")(
    ConstantAtomicWrapper,
  )((p: (input: ConstantAtomicWrapper) => Promise<ConstantAtomicWrapper>) =>
    typia.functional.validateEqualsParameters(p),
  );
