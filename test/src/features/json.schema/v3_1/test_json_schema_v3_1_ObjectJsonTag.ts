import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_json_schema_v3_1_ObjectJsonTag = _test_json_schema({
  version: "3.1",
  name: "ObjectJsonTag",
})(typia.json.schema<ObjectJsonTag, "3.1">());
