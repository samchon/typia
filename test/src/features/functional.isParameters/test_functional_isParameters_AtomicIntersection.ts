import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_isParameters_AtomicIntersection =
  _test_functional_isParameters("AtomicIntersection")(AtomicIntersection)(
    (p: (input: AtomicIntersection) => AtomicIntersection) =>
      typia.functional.isParameters(p),
  );
