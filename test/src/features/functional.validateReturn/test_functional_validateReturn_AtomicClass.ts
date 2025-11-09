import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_validateReturn_AtomicClass = (): void => _test_functional_validateReturn(
  "AtomicClass"
)(AtomicClass)(
  (p: (input: AtomicClass) => AtomicClass) => typia.functional.validateReturn(p),
)