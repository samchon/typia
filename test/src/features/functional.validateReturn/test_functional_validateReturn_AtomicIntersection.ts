import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_validateReturn_AtomicIntersection =
  _test_functional_validateReturn("AtomicIntersection")(AtomicIntersection)(
    (p: (input: AtomicIntersection) => AtomicIntersection) =>
      typia.functional.validateReturn(p),
  );
