import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_isFunction_AtomicAlias = (): void => _test_functional_isFunction(
  "AtomicAlias"
)(AtomicAlias)(
  (p: (input: AtomicAlias) => AtomicAlias) => typia.functional.isFunction(p),
)