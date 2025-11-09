import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_functional_isReturn_ObjectHttpConstant = (): void => _test_functional_isReturn(
  "ObjectHttpConstant"
)(ObjectHttpConstant)(
  (p: (input: ObjectHttpConstant) => ObjectHttpConstant) => typia.functional.isReturn(p),
)