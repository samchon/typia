import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_json_schema_v3_1_ObjectDynamic = _test_json_schema({
  version: "3.1",
  name: "ObjectDynamic",
})(typia.json.schema<ObjectDynamic, "3.1">());
