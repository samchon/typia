import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_validateEqualsReturn_ObjectNullable = (): void => _test_functional_validateEqualsReturn(
  "ObjectNullable"
)(ObjectNullable)(
  (p: (input: ObjectNullable) => ObjectNullable) => typia.functional.validateEqualsReturn(p),
)