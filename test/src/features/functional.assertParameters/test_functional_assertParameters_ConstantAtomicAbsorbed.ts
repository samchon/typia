import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_ConstantAtomicAbsorbed =
  _test_functional_assertParameters(TypeGuardError)("ConstantAtomicAbsorbed")(
    ConstantAtomicAbsorbed,
  )((p: (input: ConstantAtomicAbsorbed) => ConstantAtomicAbsorbed) =>
    typia.functional.assertParameters(p),
  );
