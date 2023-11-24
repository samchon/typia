import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_createValidateEquals_ToJsonTuple = _test_validateEquals(
  "ToJsonTuple",
)<ToJsonTuple>(ToJsonTuple)(typia.createValidateEquals<ToJsonTuple>());
