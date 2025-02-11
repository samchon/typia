import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_functional_assertEqualsReturnAsync_ToJsonAtomicUnion =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("ToJsonAtomicUnion")(
    ToJsonAtomicUnion,
  )((p: (input: ToJsonAtomicUnion) => Promise<ToJsonAtomicUnion>) =>
    typia.functional.assertEqualsReturn(p),
  );
