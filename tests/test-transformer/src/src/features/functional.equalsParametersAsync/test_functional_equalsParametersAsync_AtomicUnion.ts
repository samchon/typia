import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_equalsParametersAsync_AtomicUnion = (): Promise<void> => _test_functional_equalsParametersAsync(
  "AtomicUnion"
)(AtomicUnion)(
  (p: (input: AtomicUnion) => Promise<AtomicUnion>) =>
    typia.functional.equalsParameters(p),
)