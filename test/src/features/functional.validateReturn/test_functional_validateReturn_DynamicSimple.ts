import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_functional_validateReturn_DynamicSimple = (): void => _test_functional_validateReturn(
  "DynamicSimple"
)(DynamicSimple)(
  (p: (input: DynamicSimple) => DynamicSimple) => typia.functional.validateReturn(p),
)