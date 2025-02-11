import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_equalsReturnAsync_AtomicAlias = _test_functional_equalsReturnAsync(
  "AtomicAlias"
)(AtomicAlias)(
  (p: (input: AtomicAlias) => Promise<AtomicAlias>) =>
    typia.functional.equalsReturn(p),
)