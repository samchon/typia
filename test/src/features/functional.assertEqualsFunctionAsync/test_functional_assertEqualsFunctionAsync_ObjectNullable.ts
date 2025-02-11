import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectNullable } from "../../structures/ObjectNullable";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunctionAsync_ObjectNullable = _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
  "ObjectNullable"
)(ObjectNullable)(
  (p: (input: ObjectNullable) => Promise<ObjectNullable>) =>
    typia.functional.assertEqualsFunction(p),
)