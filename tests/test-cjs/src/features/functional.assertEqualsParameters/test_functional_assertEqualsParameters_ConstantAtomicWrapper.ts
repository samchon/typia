import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_functional_assertEqualsParameters_ConstantAtomicWrapper =
  (): void =>
    _test_functional_assertEqualsParameters(TypeGuardError)(
      "ConstantAtomicWrapper",
    )(ConstantAtomicWrapper)(
      (p: (input: ConstantAtomicWrapper) => ConstantAtomicWrapper) =>
        typia.functional.assertEqualsParameters(p),
    );
