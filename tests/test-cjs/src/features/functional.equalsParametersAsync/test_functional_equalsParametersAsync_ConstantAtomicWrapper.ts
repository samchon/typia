import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_functional_equalsParametersAsync_ConstantAtomicWrapper =
  (): Promise<void> =>
    _test_functional_equalsParametersAsync("ConstantAtomicWrapper")(
      ConstantAtomicWrapper,
    )((p: (input: ConstantAtomicWrapper) => Promise<ConstantAtomicWrapper>) =>
      typia.functional.equalsParameters(p),
    );
