import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_functional_assertParameters_ConstantAtomicUnion = (): void =>
  _test_functional_assertParameters(TypeGuardError)("ConstantAtomicUnion")(
    ConstantAtomicUnion,
  )((p: (input: ConstantAtomicUnion) => ConstantAtomicUnion) =>
    typia.functional.assertParameters(p),
  );
