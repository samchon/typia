import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_validateParametersAsync_AtomicSimple = (): Promise<void> => _test_functional_validateParametersAsync(
  "AtomicSimple"
)(AtomicSimple)(
  (p: (input: AtomicSimple) => Promise<AtomicSimple>) =>
    typia.functional.validateParameters(p),
)