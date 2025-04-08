import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_json_schema_v3_0_ObjectInternal = _test_json_schema({
  version: "3.0",
  name: "ObjectInternal",
})(typia.json.schema<ObjectInternal, "3.0">());
