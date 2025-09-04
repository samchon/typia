import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_validateEqualsReturnAsync_AtomicClass =
  (): Promise<void> =>
    _test_functional_validateEqualsReturnAsync("AtomicClass")(AtomicClass)(
      (p: (input: AtomicClass) => Promise<AtomicClass>) =>
        typia.functional.validateEqualsReturn(p),
    );
