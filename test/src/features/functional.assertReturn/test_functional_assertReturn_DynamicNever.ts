import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { DynamicNever } from "../../structures/DynamicNever";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_DynamicNever = _test_functional_assertReturn(TypeGuardError)(
  "DynamicNever"
)(DynamicNever)(
  (p: (input: DynamicNever) => DynamicNever) => typia.functional.assertReturn(p),
)