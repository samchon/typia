import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_functional_assertFunction_ConstantAtomicAbsorbed = (): void =>
  _test_functional_assertFunction(TypeGuardError)("ConstantAtomicAbsorbed")(
    ConstantAtomicAbsorbed,
  )((p: (input: ConstantAtomicAbsorbed) => ConstantAtomicAbsorbed) =>
    typia.functional.assertFunction(p),
  );
