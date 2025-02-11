import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_functional_assertEqualsReturnCustom_ConstantAtomicAbsorbed =
  _test_functional_assertEqualsReturn(CustomGuardError)(
    "ConstantAtomicAbsorbed",
  )(ConstantAtomicAbsorbed)(
    (p: (input: ConstantAtomicAbsorbed) => ConstantAtomicAbsorbed) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
