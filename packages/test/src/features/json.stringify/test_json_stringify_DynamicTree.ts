import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_json_stringify_DynamicTree = _test_json_stringify(
  "DynamicTree",
)<DynamicTree>(DynamicTree)((input) =>
  typia.json.stringify<DynamicTree>(input),
);
