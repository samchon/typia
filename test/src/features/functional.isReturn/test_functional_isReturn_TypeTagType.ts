import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_isReturn_TypeTagType = _test_functional_isReturn(
  "TypeTagType"
)(TypeTagType)(
  (p: (input: TypeTagType) => TypeTagType) => typia.functional.isReturn(p),
)