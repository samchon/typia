import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_functional_assertEqualsReturn_ConstantAtomicUnion =
  (): void =>
    _test_functional_assertEqualsReturn(TypeGuardError)("ConstantAtomicUnion")(
      ConstantAtomicUnion,
    )((p: (input: ConstantAtomicUnion) => ConstantAtomicUnion) =>
      typia.functional.assertEqualsReturn(p),
    );
