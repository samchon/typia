import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectTuple } from "../../structures/ObjectTuple";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_ObjectTuple = _test_functional_assertEqualsFunction(TypeGuardError)(
  "ObjectTuple"
)(ObjectTuple)(
  (p: (input: ObjectTuple) => ObjectTuple) => typia.functional.assertEqualsFunction(p),
)