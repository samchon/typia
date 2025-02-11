import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { NativeSimple } from "../../structures/NativeSimple";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_NativeSimple = _test_functional_assertParameters(TypeGuardError)(
  "NativeSimple"
)(NativeSimple)(
  (p: (input: NativeSimple) => NativeSimple) => typia.functional.assertParameters(p),
)