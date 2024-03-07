import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_ToJsonDouble = _test_assertEquals(
  TypeGuardError,
)("ToJsonDouble")<ToJsonDouble>(ToJsonDouble)(
  typia.createAssertEquals<ToJsonDouble>(),
);
