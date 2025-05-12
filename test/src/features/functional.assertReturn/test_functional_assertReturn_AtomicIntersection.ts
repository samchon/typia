import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_assertReturn_AtomicIntersection =
  _test_functional_assertReturn(TypeGuardError)("AtomicIntersection")(
    AtomicIntersection,
  )((p: (input: AtomicIntersection) => AtomicIntersection) =>
    typia.functional.assertReturn(p),
  );
