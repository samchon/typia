import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionCustom_TypeTagFormat = (): void => _test_functional_assertEqualsFunction(CustomGuardError)(
  "TypeTagFormat"
)(TypeTagFormat)(
  (p: (input: TypeTagFormat) => TypeTagFormat) => typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)