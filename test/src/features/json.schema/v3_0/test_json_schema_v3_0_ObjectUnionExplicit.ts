import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";

export const test_json_schema_v3_0_ObjectUnionExplicit = _test_json_schema({
  version: "3.0",
  name: "ObjectUnionExplicit",
})(typia.json.schema<ObjectUnionExplicit, "3.0">());
