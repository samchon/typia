import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_isParametersAsync_AtomicUnion = (): Promise<void> => _test_functional_isParametersAsync(
  "AtomicUnion"
)(AtomicUnion)(
  (p: (input: AtomicUnion) => Promise<AtomicUnion>) =>
    typia.functional.isParameters(p),
)