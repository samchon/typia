import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_assertEqualsFunctionAsync_AtomicAlias =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)("AtomicAlias")(
      AtomicAlias,
    )((p: (input: AtomicAlias) => Promise<AtomicAlias>) =>
      typia.functional.assertEqualsFunction(p),
    );
