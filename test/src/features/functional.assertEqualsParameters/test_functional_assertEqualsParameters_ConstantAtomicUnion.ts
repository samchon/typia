import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParameters_ConstantAtomicUnion =
  _test_functional_assertEqualsParameters(TypeGuardError)(
    "ConstantAtomicUnion",
  )(ConstantAtomicUnion)(
    (p: (input: ConstantAtomicUnion) => ConstantAtomicUnion) =>
      typia.functional.assertEqualsParameters(p),
  );
