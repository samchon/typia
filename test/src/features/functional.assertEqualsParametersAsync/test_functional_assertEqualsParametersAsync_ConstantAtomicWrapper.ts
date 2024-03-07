import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParametersAsync_ConstantAtomicWrapper =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "ConstantAtomicWrapper",
  )(ConstantAtomicWrapper)(
    (p: (input: ConstantAtomicWrapper) => Promise<ConstantAtomicWrapper>) =>
      typia.functional.assertEqualsParameters(p),
  );
