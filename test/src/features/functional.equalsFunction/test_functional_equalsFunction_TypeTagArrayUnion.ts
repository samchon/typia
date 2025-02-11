import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_functional_equalsFunction_TypeTagArrayUnion = _test_functional_equalsFunction(
  "TypeTagArrayUnion"
)(TypeTagArrayUnion)(
  (p: (input: TypeTagArrayUnion) => TypeTagArrayUnion) => typia.functional.equalsFunction(p),
)