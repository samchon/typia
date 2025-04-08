import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_json_schema_v3_1_ObjectIntersection = _test_json_schema({
  version: "3.1",
  name: "ObjectIntersection",
})(typia.json.schema<ObjectIntersection, "3.1">());
