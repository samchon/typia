import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_equalsParameters_AtomicUnion = _test_functional_equalsParameters(
  "AtomicUnion"
)(AtomicUnion)(
  (p: (input: AtomicUnion) => AtomicUnion) => typia.functional.equalsParameters(p),
)