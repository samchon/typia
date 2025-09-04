import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";

export const test_json_schema_v3_1_ObjectUnionExplicit = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ObjectUnionExplicit",
  })(typia.json.schema<ObjectUnionExplicit, "3.1">());
