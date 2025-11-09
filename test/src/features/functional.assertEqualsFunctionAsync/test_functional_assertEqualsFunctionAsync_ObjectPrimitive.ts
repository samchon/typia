import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunctionAsync_ObjectPrimitive = (): Promise<void> => _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
  "ObjectPrimitive"
)(ObjectPrimitive)(
  (p: (input: ObjectPrimitive) => Promise<ObjectPrimitive>) =>
    typia.functional.assertEqualsFunction(p),
)