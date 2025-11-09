import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_validateParameters_AtomicSimple = (): void => _test_functional_validateParameters(
  "AtomicSimple"
)(AtomicSimple)(
  (p: (input: AtomicSimple) => AtomicSimple) => typia.functional.validateParameters(p),
)