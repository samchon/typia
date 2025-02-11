import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_functional_isParameters_NativeSimple = _test_functional_isParameters(
  "NativeSimple"
)(NativeSimple)(
  (p: (input: NativeSimple) => NativeSimple) => typia.functional.isParameters(p),
)