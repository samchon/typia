import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_assertFunction_AtomicIntersection =
  _test_functional_assertFunction(TypeGuardError)("AtomicIntersection")(
    AtomicIntersection,
  )((p: (input: AtomicIntersection) => AtomicIntersection) =>
    typia.functional.assertFunction(p),
  );
