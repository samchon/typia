import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_functional_equalsFunction_ObjectHttpConstant = (): void => _test_functional_equalsFunction(
  "ObjectHttpConstant"
)(ObjectHttpConstant)(
  (p: (input: ObjectHttpConstant) => ObjectHttpConstant) => typia.functional.equalsFunction(p),
)