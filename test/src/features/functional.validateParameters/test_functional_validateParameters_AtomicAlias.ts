import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_validateParameters_AtomicAlias = (): void => _test_functional_validateParameters(
  "AtomicAlias"
)(AtomicAlias)(
  (p: (input: AtomicAlias) => AtomicAlias) => typia.functional.validateParameters(p),
)