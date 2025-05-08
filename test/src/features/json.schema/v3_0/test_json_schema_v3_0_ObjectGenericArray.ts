import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_json_schema_v3_0_ObjectGenericArray = _test_json_schema({
  version: "3.0",
  name: "ObjectGenericArray",
})(typia.json.schema<ObjectGenericArray, "3.0">());
