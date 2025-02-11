import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_assertFunction_AtomicUnion =
  _test_functional_assertFunction(TypeGuardError)("AtomicUnion")(AtomicUnion)(
    (p: (input: AtomicUnion) => AtomicUnion) =>
      typia.functional.assertFunction(p),
  );
