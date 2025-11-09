import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionCustom_TypeTagTuple = (): void => _test_functional_assertEqualsFunction(CustomGuardError)(
  "TypeTagTuple"
)(TypeTagTuple)(
  (p: (input: TypeTagTuple) => TypeTagTuple) => typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)