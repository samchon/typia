import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionCustom_TypeTagMatrix = (): void => _test_functional_assertEqualsFunction(CustomGuardError)(
  "TypeTagMatrix"
)(TypeTagMatrix)(
  (p: (input: TypeTagMatrix) => TypeTagMatrix) => typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)