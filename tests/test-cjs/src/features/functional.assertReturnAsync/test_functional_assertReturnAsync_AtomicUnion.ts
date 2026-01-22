import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_assertReturnAsync_AtomicUnion =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("AtomicUnion")(
      AtomicUnion,
    )((p: (input: AtomicUnion) => Promise<AtomicUnion>) =>
      typia.functional.assertReturn(p),
    );
