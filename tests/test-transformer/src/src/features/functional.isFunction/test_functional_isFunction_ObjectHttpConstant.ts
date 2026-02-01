import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_functional_isFunction_ObjectHttpConstant = (): void => _test_functional_isFunction(
  "ObjectHttpConstant"
)(ObjectHttpConstant)(
  (p: (input: ObjectHttpConstant) => ObjectHttpConstant) => typia.functional.isFunction(p),
)