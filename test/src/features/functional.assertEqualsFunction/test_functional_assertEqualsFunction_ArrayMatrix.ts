import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_ArrayMatrix = (): void => _test_functional_assertEqualsFunction(TypeGuardError)(
  "ArrayMatrix"
)(ArrayMatrix)(
  (p: (input: ArrayMatrix) => ArrayMatrix) => typia.functional.assertEqualsFunction(p),
)