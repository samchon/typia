import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_functional_assertFunction_ConstantAtomicWrapper =
  _test_functional_assertFunction(TypeGuardError)("ConstantAtomicWrapper")(
    ConstantAtomicWrapper,
  )((p: (input: ConstantAtomicWrapper) => ConstantAtomicWrapper) =>
    typia.functional.assertFunction(p),
  );
