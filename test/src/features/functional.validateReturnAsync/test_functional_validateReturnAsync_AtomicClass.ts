import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_validateReturnAsync_AtomicClass =
  _test_functional_validateReturnAsync("AtomicClass")(AtomicClass)(
    (p: (input: AtomicClass) => Promise<AtomicClass>) =>
      typia.functional.validateReturn(p),
  );
