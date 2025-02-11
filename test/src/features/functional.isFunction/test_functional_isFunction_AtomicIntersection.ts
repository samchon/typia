import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_isFunction_AtomicIntersection =
  _test_functional_isFunction("AtomicIntersection")(AtomicIntersection)(
    (p: (input: AtomicIntersection) => AtomicIntersection) =>
      typia.functional.isFunction(p),
  );
