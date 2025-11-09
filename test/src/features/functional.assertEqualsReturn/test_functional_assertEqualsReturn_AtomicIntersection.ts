import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_assertEqualsReturn_AtomicIntersection = (): void =>
  _test_functional_assertEqualsReturn(TypeGuardError)("AtomicIntersection")(
    AtomicIntersection,
  )((p: (input: AtomicIntersection) => AtomicIntersection) =>
    typia.functional.assertEqualsReturn(p),
  );
