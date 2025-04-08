import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectRequired } from "../../../structures/ObjectRequired";

export const test_json_schema_v3_1_ObjectRequired = _test_json_schema({
  version: "3.1",
  name: "ObjectRequired",
})(typia.json.schema<ObjectRequired, "3.1">());
