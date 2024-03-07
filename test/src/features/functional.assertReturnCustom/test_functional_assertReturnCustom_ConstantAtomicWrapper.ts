import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_ConstantAtomicWrapper =
  _test_functional_assertReturn(CustomGuardError)("ConstantAtomicWrapper")(
    ConstantAtomicWrapper,
  )((p: (input: ConstantAtomicWrapper) => ConstantAtomicWrapper) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
