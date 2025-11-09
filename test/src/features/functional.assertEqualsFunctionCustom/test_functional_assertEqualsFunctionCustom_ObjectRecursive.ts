import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionCustom_ObjectRecursive = (): void => _test_functional_assertEqualsFunction(CustomGuardError)(
  "ObjectRecursive"
)(ObjectRecursive)(
  (p: (input: ObjectRecursive) => ObjectRecursive) => typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)