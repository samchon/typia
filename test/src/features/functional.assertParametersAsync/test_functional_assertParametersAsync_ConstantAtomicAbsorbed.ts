import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_functional_assertParametersAsync_ConstantAtomicAbsorbed =
  _test_functional_assertParametersAsync(TypeGuardError)(
    "ConstantAtomicAbsorbed",
  )(ConstantAtomicAbsorbed)(
    (p: (input: ConstantAtomicAbsorbed) => Promise<ConstantAtomicAbsorbed>) =>
      typia.functional.assertParameters(p),
  );
