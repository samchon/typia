import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_functional_validateReturn_NativeSimple = (): void => _test_functional_validateReturn(
  "NativeSimple"
)(NativeSimple)(
  (p: (input: NativeSimple) => NativeSimple) => typia.functional.validateReturn(p),
)