import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_assertParametersAsync_AtomicUnion =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("AtomicUnion")(
      AtomicUnion,
    )((p: (input: AtomicUnion) => Promise<AtomicUnion>) =>
      typia.functional.assertParameters(p),
    );
