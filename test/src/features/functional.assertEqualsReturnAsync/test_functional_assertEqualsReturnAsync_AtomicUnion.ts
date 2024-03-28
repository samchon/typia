import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_assertEqualsReturnAsync_AtomicUnion =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("AtomicUnion")(
    AtomicUnion,
  )((p: (input: AtomicUnion) => Promise<AtomicUnion>) =>
    typia.functional.assertEqualsReturn(p),
  );
