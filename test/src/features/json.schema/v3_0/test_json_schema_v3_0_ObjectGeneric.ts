import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectGeneric } from "../../../structures/ObjectGeneric";

export const test_json_schema_v3_0_ObjectGeneric = _test_json_schema({
  version: "3.0",
  name: "ObjectGeneric",
})(typia.json.schema<ObjectGeneric, "3.0">());
