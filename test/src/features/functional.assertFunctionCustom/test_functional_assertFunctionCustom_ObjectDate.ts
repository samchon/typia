import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectDate } from "../../structures/ObjectDate";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_ObjectDate = (): void => _test_functional_assertFunction(CustomGuardError)(
  "ObjectDate"
)(ObjectDate)(
  (p: (input: ObjectDate) => ObjectDate) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)