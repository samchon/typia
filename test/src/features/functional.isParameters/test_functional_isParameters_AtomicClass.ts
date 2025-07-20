import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_isParameters_AtomicClass = (): void =>
  _test_functional_isParameters("AtomicClass")(AtomicClass)(
    (p: (input: AtomicClass) => AtomicClass) =>
      typia.functional.isParameters(p),
  );
