import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_functional_validateEqualsFunction_ObjectHttpConstant = _test_functional_validateEqualsFunction(
  "ObjectHttpConstant"
)(ObjectHttpConstant)(
  (p: (input: ObjectHttpConstant) => ObjectHttpConstant) => typia.functional.validateEqualsFunction(p),
)