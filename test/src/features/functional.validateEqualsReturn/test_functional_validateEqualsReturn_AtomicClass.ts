import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_validateEqualsReturn_AtomicClass = (): void =>
  _test_functional_validateEqualsReturn("AtomicClass")(AtomicClass)(
    (p: (input: AtomicClass) => AtomicClass) =>
      typia.functional.validateEqualsReturn(p),
  );
