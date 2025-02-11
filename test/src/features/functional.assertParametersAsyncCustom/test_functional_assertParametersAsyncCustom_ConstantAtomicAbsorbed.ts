import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_functional_assertParametersAsyncCustom_ConstantAtomicAbsorbed =
  _test_functional_assertParametersAsync(CustomGuardError)(
    "ConstantAtomicAbsorbed",
  )(ConstantAtomicAbsorbed)(
    (p: (input: ConstantAtomicAbsorbed) => Promise<ConstantAtomicAbsorbed>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
