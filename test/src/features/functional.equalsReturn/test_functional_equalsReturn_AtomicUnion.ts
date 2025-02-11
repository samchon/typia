import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_equalsReturn_AtomicUnion =
  _test_functional_equalsReturn("AtomicUnion")(AtomicUnion)(
    (p: (input: AtomicUnion) => AtomicUnion) =>
      typia.functional.equalsReturn(p),
  );
