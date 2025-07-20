import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_functional_assertFunctionCustom_ConstantAtomicAbsorbed =
  (): void =>
    _test_functional_assertFunction(CustomGuardError)("ConstantAtomicAbsorbed")(
      ConstantAtomicAbsorbed,
    )((p: (input: ConstantAtomicAbsorbed) => ConstantAtomicAbsorbed) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
