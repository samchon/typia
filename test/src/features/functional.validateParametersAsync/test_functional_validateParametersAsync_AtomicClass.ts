import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_validateParametersAsync_AtomicClass =
  _test_functional_validateParametersAsync("AtomicClass")(AtomicClass)(
    (p: (input: AtomicClass) => Promise<AtomicClass>) =>
      typia.functional.validateParameters(p),
  );
