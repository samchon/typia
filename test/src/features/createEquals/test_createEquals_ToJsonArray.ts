import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_createEquals_ToJsonArray = (): void =>
  _test_equals("ToJsonArray")<ToJsonArray>(ToJsonArray)(
    typia.createEquals<ToJsonArray>(),
  );
