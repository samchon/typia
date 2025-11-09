import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_createAssertGuardEquals_ToJsonUnion = (): void =>
  _test_assertGuardEquals(TypeGuardError)("ToJsonUnion")<ToJsonUnion>(
    ToJsonUnion,
  )(typia.createAssertGuardEquals<ToJsonUnion>());
