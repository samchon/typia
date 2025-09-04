import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_functional_assertParametersCustom_ConstantAtomicTagged =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)("ConstantAtomicTagged")(
      ConstantAtomicTagged,
    )((p: (input: ConstantAtomicTagged) => ConstantAtomicTagged) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
