import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParameters_ToJsonAtomicUnion =
  _test_functional_assertEqualsParameters(TypeGuardError)("ToJsonAtomicUnion")(
    ToJsonAtomicUnion,
  )((p: (input: ToJsonAtomicUnion) => ToJsonAtomicUnion) =>
    typia.functional.assertEqualsParameters(p),
  );
