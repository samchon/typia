import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_validateEqualsReturnAsync_AtomicAlias = (): Promise<void> => _test_functional_validateEqualsReturnAsync(
  "AtomicAlias"
)(AtomicAlias)(
  (p: (input: AtomicAlias) => Promise<AtomicAlias>) =>
    typia.functional.validateEqualsReturn(p),
)