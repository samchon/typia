import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_functional_assertFunctionCustom_ConstantAtomicUnion =
  (): void =>
    _test_functional_assertFunction(CustomGuardError)("ConstantAtomicUnion")(
      ConstantAtomicUnion,
    )((p: (input: ConstantAtomicUnion) => ConstantAtomicUnion) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
