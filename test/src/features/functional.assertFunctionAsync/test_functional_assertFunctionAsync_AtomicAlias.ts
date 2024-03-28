import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_assertFunctionAsync_AtomicAlias =
  _test_functional_assertFunctionAsync(TypeGuardError)("AtomicAlias")(
    AtomicAlias,
  )((p: (input: AtomicAlias) => Promise<AtomicAlias>) =>
    typia.functional.assertFunction(p),
  );
