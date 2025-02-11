import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_equalsReturn_AtomicAlias = _test_functional_equalsReturn(
  "AtomicAlias"
)(AtomicAlias)(
  (p: (input: AtomicAlias) => AtomicAlias) => typia.functional.equalsReturn(p),
)