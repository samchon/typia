import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

import { TypeGuardError } from "typia";

export const test_functional_assertFunction_ConstantAtomicAbsorbed =
  _test_functional_assertFunction(TypeGuardError)("ConstantAtomicAbsorbed")(
    ConstantAtomicAbsorbed,
  )((p: (input: ConstantAtomicAbsorbed) => ConstantAtomicAbsorbed) =>
    typia.functional.assertFunction(p),
  );
