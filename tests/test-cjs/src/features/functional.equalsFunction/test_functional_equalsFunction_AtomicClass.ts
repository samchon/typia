import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_equalsFunction_AtomicClass = (): void =>
  _test_functional_equalsFunction("AtomicClass")(AtomicClass)(
    (p: (input: AtomicClass) => AtomicClass) =>
      typia.functional.equalsFunction(p),
  );
