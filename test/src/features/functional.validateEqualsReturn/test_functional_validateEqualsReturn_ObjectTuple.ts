import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_validateEqualsReturn_ObjectTuple = (): void => _test_functional_validateEqualsReturn(
  "ObjectTuple"
)(ObjectTuple)(
  (p: (input: ObjectTuple) => ObjectTuple) => typia.functional.validateEqualsReturn(p),
)