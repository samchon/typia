import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_equalsParameters_AtomicClass = (): void => _test_functional_equalsParameters(
  "AtomicClass"
)(AtomicClass)(
  (p: (input: AtomicClass) => AtomicClass) => typia.functional.equalsParameters(p),
)