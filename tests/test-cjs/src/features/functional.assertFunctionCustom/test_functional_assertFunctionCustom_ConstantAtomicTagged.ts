import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_functional_assertFunctionCustom_ConstantAtomicTagged =
  (): void =>
    _test_functional_assertFunction(CustomGuardError)("ConstantAtomicTagged")(
      ConstantAtomicTagged,
    )((p: (input: ConstantAtomicTagged) => ConstantAtomicTagged) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
