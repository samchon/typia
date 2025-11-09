import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_equalsParametersAsync_AtomicClass = (): Promise<void> => _test_functional_equalsParametersAsync(
  "AtomicClass"
)(AtomicClass)(
  (p: (input: AtomicClass) => Promise<AtomicClass>) =>
    typia.functional.equalsParameters(p),
)