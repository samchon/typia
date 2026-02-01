import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_isFunction_AtomicClass = (): void => _test_functional_isFunction(
  "AtomicClass"
)(AtomicClass)(
  (p: (input: AtomicClass) => AtomicClass) => typia.functional.isFunction(p),
)