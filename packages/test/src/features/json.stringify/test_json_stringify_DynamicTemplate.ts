import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_json_stringify_DynamicTemplate = _test_json_stringify(
  "DynamicTemplate",
)<DynamicTemplate>(DynamicTemplate)((input) =>
  typia.json.stringify<DynamicTemplate>(input),
);
