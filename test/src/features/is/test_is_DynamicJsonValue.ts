import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_is_DynamicJsonValue = _test_is(
  "DynamicJsonValue",
)<DynamicJsonValue>(DynamicJsonValue)((input) =>
  typia.is<DynamicJsonValue>(input),
);
