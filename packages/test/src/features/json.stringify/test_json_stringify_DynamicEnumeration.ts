import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_json_stringify_DynamicEnumeration = _test_json_stringify(
  "DynamicEnumeration",
)<DynamicEnumeration>(DynamicEnumeration)((input) =>
  typia.json.stringify<DynamicEnumeration>(input),
);
