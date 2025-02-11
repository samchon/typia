import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_isReturn_AtomicAlias = _test_functional_isReturn(
  "AtomicAlias"
)(AtomicAlias)(
  (p: (input: AtomicAlias) => AtomicAlias) => typia.functional.isReturn(p),
)