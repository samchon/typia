import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_assertEqualsFunction_AtomicIntersection =
  _test_functional_assertEqualsFunction(TypeGuardError)("AtomicIntersection")(
    AtomicIntersection,
  )((p: (input: AtomicIntersection) => AtomicIntersection) =>
    typia.functional.assertEqualsFunction(p),
  );
