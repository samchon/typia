import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_validateEqualsFunction_ObjectRequired = (): void => _test_functional_validateEqualsFunction(
  "ObjectRequired"
)(ObjectRequired)(
  (p: (input: ObjectRequired) => ObjectRequired) => typia.functional.validateEqualsFunction(p),
)