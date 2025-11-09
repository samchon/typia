import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_ObjectRecursive = (): void => _test_functional_assertFunction(CustomGuardError)(
  "ObjectRecursive"
)(ObjectRecursive)(
  (p: (input: ObjectRecursive) => ObjectRecursive) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)