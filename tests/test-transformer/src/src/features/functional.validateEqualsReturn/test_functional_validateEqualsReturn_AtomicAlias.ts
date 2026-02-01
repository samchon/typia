import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_validateEqualsReturn_AtomicAlias = (): void => _test_functional_validateEqualsReturn(
  "AtomicAlias"
)(AtomicAlias)(
  (p: (input: AtomicAlias) => AtomicAlias) => typia.functional.validateEqualsReturn(p),
)