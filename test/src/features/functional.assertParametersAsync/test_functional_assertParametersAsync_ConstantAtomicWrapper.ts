import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_functional_assertParametersAsync_ConstantAtomicWrapper =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)(
      "ConstantAtomicWrapper",
    )(ConstantAtomicWrapper)(
      (p: (input: ConstantAtomicWrapper) => Promise<ConstantAtomicWrapper>) =>
        typia.functional.assertParameters(p),
    );
