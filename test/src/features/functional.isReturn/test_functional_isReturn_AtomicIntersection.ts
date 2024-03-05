import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_isReturn_AtomicIntersection =
  _test_functional_isReturn("AtomicIntersection")(AtomicIntersection)(
    (p: (input: AtomicIntersection) => AtomicIntersection) =>
      typia.functional.isReturn(p),
  );
