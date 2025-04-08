import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";

export const test_json_schema_v3_0_ObjectPartialAndRequired = _test_json_schema(
  {
    version: "3.0",
    name: "ObjectPartialAndRequired",
  },
)(typia.json.schema<ObjectPartialAndRequired, "3.0">());
