import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_validateEqualsFunction_ObjectTuple = (): void => _test_functional_validateEqualsFunction(
  "ObjectTuple"
)(ObjectTuple)(
  (p: (input: ObjectTuple) => ObjectTuple) => typia.functional.validateEqualsFunction(p),
)