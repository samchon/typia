import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_ConstantAtomicSimple =
  _test_functional_assertFunctionAsync(TypeGuardError)("ConstantAtomicSimple")(
    ConstantAtomicSimple,
  )((p: (input: ConstantAtomicSimple) => Promise<ConstantAtomicSimple>) =>
    typia.functional.assertFunction(p),
  );
