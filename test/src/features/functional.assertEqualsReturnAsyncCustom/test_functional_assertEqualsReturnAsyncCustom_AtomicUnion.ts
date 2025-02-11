import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_assertEqualsReturnAsyncCustom_AtomicUnion =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)("AtomicUnion")(
    AtomicUnion,
  )((p: (input: AtomicUnion) => Promise<AtomicUnion>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
