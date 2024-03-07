import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_ToJsonAtomicUnion =
  _test_functional_assertFunction(CustomGuardError)("ToJsonAtomicUnion")(
    ToJsonAtomicUnion,
  )((p: (input: ToJsonAtomicUnion) => ToJsonAtomicUnion) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
