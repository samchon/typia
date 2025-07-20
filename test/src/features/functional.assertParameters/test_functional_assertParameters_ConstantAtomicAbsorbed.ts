import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_functional_assertParameters_ConstantAtomicAbsorbed =
  (): void =>
    _test_functional_assertParameters(TypeGuardError)("ConstantAtomicAbsorbed")(
      ConstantAtomicAbsorbed,
    )((p: (input: ConstantAtomicAbsorbed) => ConstantAtomicAbsorbed) =>
      typia.functional.assertParameters(p),
    );
