import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_AtomicIntersection =
  _test_functional_assertEqualsReturn(TypeGuardError)("AtomicIntersection")(
    AtomicIntersection,
  )((p: (input: AtomicIntersection) => AtomicIntersection) =>
    typia.functional.assertEqualsReturn(p),
  );
