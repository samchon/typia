import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_validate_DynamicJsonValue = _test_validate(
  "DynamicJsonValue",
)<DynamicJsonValue>(DynamicJsonValue)((input) =>
  typia.validate<DynamicJsonValue>(input),
);
