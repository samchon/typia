import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_validateEqualsReturn_AtomicIntersection =
  _test_functional_validateEqualsReturn("AtomicIntersection")(
    AtomicIntersection,
  )((p: (input: AtomicIntersection) => AtomicIntersection) =>
    typia.functional.validateEqualsReturn(p),
  );
