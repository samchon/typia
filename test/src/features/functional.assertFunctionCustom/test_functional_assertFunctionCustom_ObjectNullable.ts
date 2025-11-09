import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectNullable } from "../../structures/ObjectNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_ObjectNullable = (): void => _test_functional_assertFunction(CustomGuardError)(
  "ObjectNullable"
)(ObjectNullable)(
  (p: (input: ObjectNullable) => ObjectNullable) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)