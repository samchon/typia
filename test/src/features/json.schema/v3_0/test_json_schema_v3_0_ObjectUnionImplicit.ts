import typia from "typia";
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_0_ObjectUnionImplicit = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "ObjectUnionImplicit", 
  })(typia.json.schema<ObjectUnionImplicit, "3.0">());