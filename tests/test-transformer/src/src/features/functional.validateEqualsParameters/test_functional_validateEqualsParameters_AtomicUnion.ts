import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_validateEqualsParameters_AtomicUnion = (): void => _test_functional_validateEqualsParameters(
  "AtomicUnion"
)(AtomicUnion)(
  (p: (input: AtomicUnion) => AtomicUnion) => typia.functional.validateEqualsParameters(p),
)