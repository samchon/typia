import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_validateEqualsFunctionAsync_AtomicClass =
  _test_functional_validateEqualsFunctionAsync("AtomicClass")(AtomicClass)(
    (p: (input: AtomicClass) => Promise<AtomicClass>) =>
      typia.functional.validateEqualsFunction(p),
  );
