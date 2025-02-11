import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectTuple } from "../../structures/ObjectTuple";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_ObjectTuple = _test_functional_assertFunctionAsync(TypeGuardError)(
  "ObjectTuple"
)(ObjectTuple)(
  (p: (input: ObjectTuple) => Promise<ObjectTuple>) =>
    typia.functional.assertFunction(p),
)