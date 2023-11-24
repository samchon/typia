import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_json_assertParse_DynamicConstant = _test_json_assertParse(
  "DynamicConstant",
)<DynamicConstant>(DynamicConstant)((input) =>
  typia.json.assertParse<DynamicConstant>(input),
);
