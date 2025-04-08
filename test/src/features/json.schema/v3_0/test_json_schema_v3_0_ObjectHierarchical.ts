import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectHierarchical } from "../../../structures/ObjectHierarchical";

export const test_json_schema_v3_0_ObjectHierarchical = _test_json_schema({
  version: "3.0",
  name: "ObjectHierarchical",
})(typia.json.schema<ObjectHierarchical, "3.0">());
