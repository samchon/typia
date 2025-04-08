import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";

export const test_json_schema_v3_0_ObjectUndefined = _test_json_schema({
  version: "3.0",
  name: "ObjectUndefined",
})(typia.json.schema<ObjectUndefined, "3.0">());
