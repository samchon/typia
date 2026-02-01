import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_validateEqualsParametersAsync_AtomicClass = (): Promise<void> => _test_functional_validateEqualsParametersAsync(
  "AtomicClass"
)(AtomicClass)(
  (p: (input: AtomicClass) => Promise<AtomicClass>) =>
    typia.functional.validateEqualsParameters(p),
)