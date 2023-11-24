import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_validate_ToJsonArray = _test_validate(
  "ToJsonArray",
)<ToJsonArray>(ToJsonArray)((input) => typia.validate<ToJsonArray>(input));
