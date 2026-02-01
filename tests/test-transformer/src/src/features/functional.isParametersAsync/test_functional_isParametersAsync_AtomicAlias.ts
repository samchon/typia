import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_isParametersAsync_AtomicAlias = (): Promise<void> => _test_functional_isParametersAsync(
  "AtomicAlias"
)(AtomicAlias)(
  (p: (input: AtomicAlias) => Promise<AtomicAlias>) =>
    typia.functional.isParameters(p),
)