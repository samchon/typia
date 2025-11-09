import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_validateEqualsParametersAsync_AtomicUnion = (): Promise<void> => _test_functional_validateEqualsParametersAsync(
  "AtomicUnion"
)(AtomicUnion)(
  (p: (input: AtomicUnion) => Promise<AtomicUnion>) =>
    typia.functional.validateEqualsParameters(p),
)