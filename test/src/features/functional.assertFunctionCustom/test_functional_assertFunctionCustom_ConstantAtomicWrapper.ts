import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_functional_assertFunctionCustom_ConstantAtomicWrapper =
  _test_functional_assertFunction(CustomGuardError)("ConstantAtomicWrapper")(
    ConstantAtomicWrapper,
  )((p: (input: ConstantAtomicWrapper) => ConstantAtomicWrapper) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
