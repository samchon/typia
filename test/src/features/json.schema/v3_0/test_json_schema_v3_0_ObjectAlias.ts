import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectAlias } from "../../../structures/ObjectAlias";

export const test_json_schema_v3_0_ObjectAlias = _test_json_schema({
  version: "3.0",
  name: "ObjectAlias",
})(typia.json.schema<ObjectAlias, "3.0">());
