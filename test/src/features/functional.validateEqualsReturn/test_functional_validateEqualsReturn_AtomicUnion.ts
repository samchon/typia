import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_validateEqualsReturn_AtomicUnion =
  _test_functional_validateEqualsReturn("AtomicUnion")(AtomicUnion)(
    (p: (input: AtomicUnion) => AtomicUnion) =>
      typia.functional.validateEqualsReturn(p),
  );
