import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_assertEqualsParametersAsync_AtomicUnion =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(TypeGuardError)("AtomicUnion")(
      AtomicUnion,
    )((p: (input: AtomicUnion) => Promise<AtomicUnion>) =>
      typia.functional.assertEqualsParameters(p),
    );
