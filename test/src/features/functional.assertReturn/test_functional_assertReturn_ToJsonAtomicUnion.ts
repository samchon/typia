import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_functional_assertReturn_ToJsonAtomicUnion =
  _test_functional_assertReturn(TypeGuardError)("ToJsonAtomicUnion")(
    ToJsonAtomicUnion,
  )((p: (input: ToJsonAtomicUnion) => ToJsonAtomicUnion) =>
    typia.functional.assertReturn(p),
  );
