import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_json_schema_v3_1_ObjectUnionDouble = _test_json_schema({
  version: "3.1",
  name: "ObjectUnionDouble",
})(typia.json.schema<ObjectUnionDouble, "3.1">());
