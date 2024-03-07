import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_ConstantAtomicWrapper =
  _test_functional_assertEqualsReturn(CustomGuardError)(
    "ConstantAtomicWrapper",
  )(ConstantAtomicWrapper)(
    (p: (input: ConstantAtomicWrapper) => ConstantAtomicWrapper) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
