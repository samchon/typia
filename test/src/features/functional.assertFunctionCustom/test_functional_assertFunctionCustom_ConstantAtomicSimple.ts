import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_ConstantAtomicSimple =
  _test_functional_assertFunction(CustomGuardError)("ConstantAtomicSimple")(
    ConstantAtomicSimple,
  )((p: (input: ConstantAtomicSimple) => ConstantAtomicSimple) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
