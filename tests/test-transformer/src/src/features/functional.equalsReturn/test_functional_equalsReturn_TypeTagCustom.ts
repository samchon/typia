import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_equalsReturn_TypeTagCustom = (): void => _test_functional_equalsReturn(
  "TypeTagCustom"
)(TypeTagCustom)(
  (p: (input: TypeTagCustom) => TypeTagCustom) => typia.functional.equalsReturn(p),
)