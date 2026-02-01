import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_functional_validateParameters_NativeSimple = (): void => _test_functional_validateParameters(
  "NativeSimple"
)(NativeSimple)(
  (p: (input: NativeSimple) => NativeSimple) => typia.functional.validateParameters(p),
)