import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_equalsReturn_TypeTagType = (): void => _test_functional_equalsReturn(
  "TypeTagType"
)(TypeTagType)(
  (p: (input: TypeTagType) => TypeTagType) => typia.functional.equalsReturn(p),
)