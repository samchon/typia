import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_isReturn_AtomicClass = (): void =>
  _test_functional_isReturn("AtomicClass")(AtomicClass)(
    (p: (input: AtomicClass) => AtomicClass) => typia.functional.isReturn(p),
  );
