import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_TypeTagFormat = _test_functional_assertEqualsFunction(TypeGuardError)(
  "TypeTagFormat"
)(TypeTagFormat)(
  (p: (input: TypeTagFormat) => TypeTagFormat) => typia.functional.assertEqualsFunction(p),
)