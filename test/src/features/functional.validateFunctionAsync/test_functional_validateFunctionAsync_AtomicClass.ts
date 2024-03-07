import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_validateFunctionAsync_AtomicClass =
  _test_functional_validateFunctionAsync("AtomicClass")(AtomicClass)(
    (p: (input: AtomicClass) => Promise<AtomicClass>) =>
      typia.functional.validateFunction(p),
  );
