import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

import { TypeGuardError } from "typia";

export const test_assertEquals_ToJsonDouble = _test_assertEquals(
  TypeGuardError,
)("ToJsonDouble")<ToJsonDouble>(ToJsonDouble)((input) =>
  typia.assertEquals<ToJsonDouble>(input),
);
