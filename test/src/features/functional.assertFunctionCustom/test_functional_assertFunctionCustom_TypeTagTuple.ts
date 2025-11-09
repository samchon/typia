import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_TypeTagTuple = (): void => _test_functional_assertFunction(CustomGuardError)(
  "TypeTagTuple"
)(TypeTagTuple)(
  (p: (input: TypeTagTuple) => TypeTagTuple) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)