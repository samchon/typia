import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_functional_assertEqualsReturn_ConstantAtomicWrapper =
  (): void =>
    _test_functional_assertEqualsReturn(TypeGuardError)(
      "ConstantAtomicWrapper",
    )(ConstantAtomicWrapper)(
      (p: (input: ConstantAtomicWrapper) => ConstantAtomicWrapper) =>
        typia.functional.assertEqualsReturn(p),
    );
