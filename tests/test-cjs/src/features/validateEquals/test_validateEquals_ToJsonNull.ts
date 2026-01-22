import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_validateEquals_ToJsonNull = (): void =>
  _test_validateEquals("ToJsonNull")<ToJsonNull>(ToJsonNull)((input) =>
    typia.validateEquals<ToJsonNull>(input),
  );
