import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_assertGuard_ToJsonUnion = (): void =>
  _test_assertGuard(TypeGuardError)("ToJsonUnion")<ToJsonUnion>(ToJsonUnion)(
    (input) => typia.assertGuard<ToJsonUnion>(input),
  );
