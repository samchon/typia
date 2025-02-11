import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_functional_assertEqualsFunctionAsync_ConstantAtomicWrapper =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
    "ConstantAtomicWrapper",
  )(ConstantAtomicWrapper)(
    (p: (input: ConstantAtomicWrapper) => Promise<ConstantAtomicWrapper>) =>
      typia.functional.assertEqualsFunction(p),
  );
