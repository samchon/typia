import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_functional_equalsParameters_TypeTagArrayUnion = _test_functional_equalsParameters(
  "TypeTagArrayUnion"
)(TypeTagArrayUnion)(
  (p: (input: TypeTagArrayUnion) => TypeTagArrayUnion) => typia.functional.equalsParameters(p),
)