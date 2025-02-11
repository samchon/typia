import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_assertFunctionAsync_AtomicUnion =
  _test_functional_assertFunctionAsync(TypeGuardError)("AtomicUnion")(
    AtomicUnion,
  )((p: (input: AtomicUnion) => Promise<AtomicUnion>) =>
    typia.functional.assertFunction(p),
  );
