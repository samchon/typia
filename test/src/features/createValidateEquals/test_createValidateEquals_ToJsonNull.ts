import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_createValidateEquals_ToJsonNull = (): void =>
  _test_validateEquals("ToJsonNull")<ToJsonNull>(ToJsonNull)(
    typia.createValidateEquals<ToJsonNull>(),
  );
