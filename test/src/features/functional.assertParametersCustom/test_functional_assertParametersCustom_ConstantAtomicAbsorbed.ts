import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_functional_assertParametersCustom_ConstantAtomicAbsorbed =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)(
      "ConstantAtomicAbsorbed",
    )(ConstantAtomicAbsorbed)(
      (p: (input: ConstantAtomicAbsorbed) => ConstantAtomicAbsorbed) =>
        typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
