import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_validateReturn_TypeTagFormat = (): void => _test_functional_validateReturn(
  "TypeTagFormat"
)(TypeTagFormat)(
  (p: (input: TypeTagFormat) => TypeTagFormat) => typia.functional.validateReturn(p),
)