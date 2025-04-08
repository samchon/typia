import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectDate } from "../../../structures/ObjectDate";

export const test_json_schema_v3_0_ObjectDate = _test_json_schema({
  version: "3.0",
  name: "ObjectDate",
})(typia.json.schema<ObjectDate, "3.0">());
