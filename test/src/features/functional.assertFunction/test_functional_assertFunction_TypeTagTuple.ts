import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

import { TypeGuardError } from "typia";

export const test_functional_assertFunction_TypeTagTuple = (): void => _test_functional_assertFunction(TypeGuardError)(
  "TypeTagTuple"
)(TypeTagTuple)(
  (p: (input: TypeTagTuple) => TypeTagTuple) => typia.functional.assertFunction(p),
)