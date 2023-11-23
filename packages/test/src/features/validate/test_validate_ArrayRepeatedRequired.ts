import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_validate_ArrayRepeatedRequired = _test_validate(
  "ArrayRepeatedRequired",
)<ArrayRepeatedRequired>(ArrayRepeatedRequired)((input) =>
  typia.validate<ArrayRepeatedRequired>(input),
);
