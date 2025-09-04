import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_functional_assertEqualsReturn_ConstantAtomicAbsorbed =
  (): void =>
    _test_functional_assertEqualsReturn(TypeGuardError)(
      "ConstantAtomicAbsorbed",
    )(ConstantAtomicAbsorbed)(
      (p: (input: ConstantAtomicAbsorbed) => ConstantAtomicAbsorbed) =>
        typia.functional.assertEqualsReturn(p),
    );
