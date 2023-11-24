import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_json_assertParse_DynamicTemplate = _test_json_assertParse(
  "DynamicTemplate",
)<DynamicTemplate>(DynamicTemplate)((input) =>
  typia.json.assertParse<DynamicTemplate>(input),
);
