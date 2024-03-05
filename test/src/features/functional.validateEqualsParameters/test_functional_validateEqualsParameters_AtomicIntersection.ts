import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_validateEqualsParameters_AtomicIntersection =
  _test_functional_validateEqualsParameters("AtomicIntersection")(
    AtomicIntersection,
  )((p: (input: AtomicIntersection) => AtomicIntersection) =>
    typia.functional.validateEqualsParameters(p),
  );
