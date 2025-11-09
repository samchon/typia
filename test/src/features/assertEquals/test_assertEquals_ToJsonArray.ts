import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_assertEquals_ToJsonArray = (): void =>
  _test_assertEquals(TypeGuardError)("ToJsonArray")<ToJsonArray>(ToJsonArray)(
    (input) => typia.assertEquals<ToJsonArray>(input),
  );
