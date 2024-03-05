import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_validateEqualsFunction_AtomicIntersection =
  _test_functional_validateEqualsFunction("AtomicIntersection")(
    AtomicIntersection,
  )((p: (input: AtomicIntersection) => AtomicIntersection) =>
    typia.functional.validateEqualsFunction(p),
  );
