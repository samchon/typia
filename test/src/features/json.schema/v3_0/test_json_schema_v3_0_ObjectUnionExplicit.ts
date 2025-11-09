import typia from "typia";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_0_ObjectUnionExplicit = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "ObjectUnionExplicit", 
  })(typia.json.schema<ObjectUnionExplicit, "3.0">());