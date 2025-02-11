import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_functional_assertEqualsFunction_ConstantAtomicUnion =
  _test_functional_assertEqualsFunction(TypeGuardError)("ConstantAtomicUnion")(
    ConstantAtomicUnion,
  )((p: (input: ConstantAtomicUnion) => ConstantAtomicUnion) =>
    typia.functional.assertEqualsFunction(p),
  );
