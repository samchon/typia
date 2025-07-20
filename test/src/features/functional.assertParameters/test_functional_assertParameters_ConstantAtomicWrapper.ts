import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_functional_assertParameters_ConstantAtomicWrapper =
  (): void =>
    _test_functional_assertParameters(TypeGuardError)("ConstantAtomicWrapper")(
      ConstantAtomicWrapper,
    )((p: (input: ConstantAtomicWrapper) => ConstantAtomicWrapper) =>
      typia.functional.assertParameters(p),
    );
