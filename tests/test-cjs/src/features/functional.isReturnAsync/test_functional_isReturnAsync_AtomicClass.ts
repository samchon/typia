import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_isReturnAsync_AtomicClass = (): Promise<void> =>
  _test_functional_isReturnAsync("AtomicClass")(AtomicClass)(
    (p: (input: AtomicClass) => Promise<AtomicClass>) =>
      typia.functional.isReturn(p),
  );
