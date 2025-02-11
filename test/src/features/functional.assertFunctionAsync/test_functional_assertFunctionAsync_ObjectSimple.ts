import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectSimple } from "../../structures/ObjectSimple";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_ObjectSimple = _test_functional_assertFunctionAsync(TypeGuardError)(
  "ObjectSimple"
)(ObjectSimple)(
  (p: (input: ObjectSimple) => Promise<ObjectSimple>) =>
    typia.functional.assertFunction(p),
)