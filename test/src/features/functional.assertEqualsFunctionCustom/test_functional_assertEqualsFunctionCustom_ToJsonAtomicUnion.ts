import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_functional_assertEqualsFunctionCustom_ToJsonAtomicUnion =
  _test_functional_assertEqualsFunction(CustomGuardError)("ToJsonAtomicUnion")(
    ToJsonAtomicUnion,
  )((p: (input: ToJsonAtomicUnion) => ToJsonAtomicUnion) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
