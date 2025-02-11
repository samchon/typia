import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ArraySimple } from "../../structures/ArraySimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionCustom_ArraySimple = _test_functional_assertEqualsFunction(CustomGuardError)(
  "ArraySimple"
)(ArraySimple)(
  (p: (input: ArraySimple) => ArraySimple) => typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)