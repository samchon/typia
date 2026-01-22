import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";

export const test_json_schema_v3_0_ObjectPrimitive = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "ObjectPrimitive",
  })(typia.json.schema<ObjectPrimitive, "3.0">());
