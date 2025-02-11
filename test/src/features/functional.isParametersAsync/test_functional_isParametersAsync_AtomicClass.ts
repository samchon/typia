import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_isParametersAsync_AtomicClass =
  _test_functional_isParametersAsync("AtomicClass")(AtomicClass)(
    (p: (input: AtomicClass) => Promise<AtomicClass>) =>
      typia.functional.isParameters(p),
  );
