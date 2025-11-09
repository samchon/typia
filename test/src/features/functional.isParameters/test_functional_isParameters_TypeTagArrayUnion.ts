import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_functional_isParameters_TypeTagArrayUnion = (): void => _test_functional_isParameters(
  "TypeTagArrayUnion"
)(TypeTagArrayUnion)(
  (p: (input: TypeTagArrayUnion) => TypeTagArrayUnion) => typia.functional.isParameters(p),
)