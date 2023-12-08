import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_json_isParse_ArrayRepeatedRequired = _test_json_isParse(
  "ArrayRepeatedRequired",
)<ArrayRepeatedRequired>(ArrayRepeatedRequired)((input) =>
  typia.json.isParse<ArrayRepeatedRequired>(input),
);
