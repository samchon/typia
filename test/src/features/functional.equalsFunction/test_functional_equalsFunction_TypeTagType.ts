import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_equalsFunction_TypeTagType = _test_functional_equalsFunction(
  "TypeTagType"
)(TypeTagType)(
  (p: (input: TypeTagType) => TypeTagType) => typia.functional.equalsFunction(p),
)