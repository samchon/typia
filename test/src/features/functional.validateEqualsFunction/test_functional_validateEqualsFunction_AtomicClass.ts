import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_validateEqualsFunction_AtomicClass = (): void =>
  _test_functional_validateEqualsFunction("AtomicClass")(AtomicClass)(
    (p: (input: AtomicClass) => AtomicClass) =>
      typia.functional.validateEqualsFunction(p),
  );
