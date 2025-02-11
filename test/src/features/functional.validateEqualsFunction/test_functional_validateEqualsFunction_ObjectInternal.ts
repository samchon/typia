import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_validateEqualsFunction_ObjectInternal = _test_functional_validateEqualsFunction(
  "ObjectInternal"
)(ObjectInternal)(
  (p: (input: ObjectInternal) => ObjectInternal) => typia.functional.validateEqualsFunction(p),
)