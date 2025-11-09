import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_ObjectGenericArray = (): void => _test_functional_assertFunction(CustomGuardError)(
  "ObjectGenericArray"
)(ObjectGenericArray)(
  (p: (input: ObjectGenericArray) => ObjectGenericArray) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)