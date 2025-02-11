import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_functional_validateEqualsFunction_ObjectHttpNullable = _test_functional_validateEqualsFunction(
  "ObjectHttpNullable"
)(ObjectHttpNullable)(
  (p: (input: ObjectHttpNullable) => ObjectHttpNullable) => typia.functional.validateEqualsFunction(p),
)