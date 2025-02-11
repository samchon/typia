import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_TypeTagArrayUnion = _test_functional_assertFunction(CustomGuardError)(
  "TypeTagArrayUnion"
)(TypeTagArrayUnion)(
  (p: (input: TypeTagArrayUnion) => TypeTagArrayUnion) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)