import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_json_assertParse_DynamicTree = _test_json_assertParse(
  "DynamicTree",
)<DynamicTree>(DynamicTree)((input) =>
  typia.json.assertParse<DynamicTree>(input),
);
