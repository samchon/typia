import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_ToJsonAtomicUnion =
  _test_functional_assertParametersAsync(TypeGuardError)("ToJsonAtomicUnion")(
    ToJsonAtomicUnion,
  )((p: (input: ToJsonAtomicUnion) => Promise<ToJsonAtomicUnion>) =>
    typia.functional.assertParameters(p),
  );
