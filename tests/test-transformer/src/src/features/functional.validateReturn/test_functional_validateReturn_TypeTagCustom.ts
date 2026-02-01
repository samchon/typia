import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_validateReturn_TypeTagCustom = (): void => _test_functional_validateReturn(
  "TypeTagCustom"
)(TypeTagCustom)(
  (p: (input: TypeTagCustom) => TypeTagCustom) => typia.functional.validateReturn(p),
)