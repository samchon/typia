import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";

export const test_json_schema_v3_1_ObjectPartialAndRequired = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ObjectPartialAndRequired",
  })(typia.json.schema<ObjectPartialAndRequired, "3.1">());
