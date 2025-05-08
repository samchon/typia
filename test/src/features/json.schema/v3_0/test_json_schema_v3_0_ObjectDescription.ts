import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectDescription } from "../../../structures/ObjectDescription";

export const test_json_schema_v3_0_ObjectDescription = _test_json_schema({
  version: "3.0",
  name: "ObjectDescription",
})(typia.json.schema<ObjectDescription, "3.0">());
