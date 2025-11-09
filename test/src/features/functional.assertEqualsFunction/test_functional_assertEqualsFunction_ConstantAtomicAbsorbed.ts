import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_functional_assertEqualsFunction_ConstantAtomicAbsorbed =
  (): void =>
    _test_functional_assertEqualsFunction(TypeGuardError)(
      "ConstantAtomicAbsorbed",
    )(ConstantAtomicAbsorbed)(
      (p: (input: ConstantAtomicAbsorbed) => ConstantAtomicAbsorbed) =>
        typia.functional.assertEqualsFunction(p),
    );
