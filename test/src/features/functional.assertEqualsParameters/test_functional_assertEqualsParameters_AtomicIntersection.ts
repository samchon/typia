import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_assertEqualsParameters_AtomicIntersection =
  _test_functional_assertEqualsParameters(TypeGuardError)("AtomicIntersection")(
    AtomicIntersection,
  )((p: (input: AtomicIntersection) => AtomicIntersection) =>
    typia.functional.assertEqualsParameters(p),
  );
