import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_functional_isReturn_NativeSimple = _test_functional_isReturn(
  "NativeSimple"
)(NativeSimple)(
  (p: (input: NativeSimple) => NativeSimple) => typia.functional.isReturn(p),
)