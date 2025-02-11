import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_assertParameters_AtomicIntersection =
  _test_functional_assertParameters(TypeGuardError)("AtomicIntersection")(
    AtomicIntersection,
  )((p: (input: AtomicIntersection) => AtomicIntersection) =>
    typia.functional.assertParameters(p),
  );
