import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_equalsReturnAsync_AtomicClass =
  _test_functional_equalsReturnAsync("AtomicClass")(AtomicClass)(
    (p: (input: AtomicClass) => Promise<AtomicClass>) =>
      typia.functional.equalsReturn(p),
  );
