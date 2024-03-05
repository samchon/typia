import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_equalsReturn_AtomicClass =
  _test_functional_equalsReturn("AtomicClass")(AtomicClass)(
    (p: (input: AtomicClass) => AtomicClass) =>
      typia.functional.equalsReturn(p),
  );
