import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_createAssertEquals_ToJsonDouble = (): void =>
  _test_assertEquals(TypeGuardError)("ToJsonDouble")<ToJsonDouble>(
    ToJsonDouble,
  )(typia.createAssertEquals<ToJsonDouble>());
