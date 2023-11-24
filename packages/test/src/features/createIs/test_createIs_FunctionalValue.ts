import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_createIs_FunctionalValue = _test_is(
  "FunctionalValue",
)<FunctionalValue>(FunctionalValue)(typia.createIs<FunctionalValue>());
