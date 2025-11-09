import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_functional_assertParameters_ConstantAtomicSimple = (): void =>
  _test_functional_assertParameters(TypeGuardError)("ConstantAtomicSimple")(
    ConstantAtomicSimple,
  )((p: (input: ConstantAtomicSimple) => ConstantAtomicSimple) =>
    typia.functional.assertParameters(p),
  );
