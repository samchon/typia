import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_validateFunction_AtomicClass = (): void => _test_functional_validateFunction(
  "AtomicClass"
)(AtomicClass)(
  (p: (input: AtomicClass) => AtomicClass) => typia.functional.validateFunction(p),
)