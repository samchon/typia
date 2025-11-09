import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_equalsParameters_AtomicSimple = (): void => _test_functional_equalsParameters(
  "AtomicSimple"
)(AtomicSimple)(
  (p: (input: AtomicSimple) => AtomicSimple) => typia.functional.equalsParameters(p),
)