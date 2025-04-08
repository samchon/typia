import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";

export const test_json_schema_v3_0_DynamicEnumeration = _test_json_schema({
  version: "3.0",
  name: "DynamicEnumeration",
})(typia.json.schema<DynamicEnumeration, "3.0">());
