import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_ToJsonUnion = (): void => _test_functional_assertReturn(TypeGuardError)(
  "ToJsonUnion"
)(ToJsonUnion)(
  (p: (input: ToJsonUnion) => ToJsonUnion) => typia.functional.assertReturn(p),
)