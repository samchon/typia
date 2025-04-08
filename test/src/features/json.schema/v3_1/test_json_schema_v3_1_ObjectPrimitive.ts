import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";

export const test_json_schema_v3_1_ObjectPrimitive = _test_json_schema({
  version: "3.1",
  name: "ObjectPrimitive",
})(typia.json.schema<ObjectPrimitive, "3.1">());
