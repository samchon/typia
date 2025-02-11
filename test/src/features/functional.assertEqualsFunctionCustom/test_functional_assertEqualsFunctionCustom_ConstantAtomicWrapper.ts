import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_functional_assertEqualsFunctionCustom_ConstantAtomicWrapper =
  _test_functional_assertEqualsFunction(CustomGuardError)(
    "ConstantAtomicWrapper",
  )(ConstantAtomicWrapper)(
    (p: (input: ConstantAtomicWrapper) => ConstantAtomicWrapper) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
