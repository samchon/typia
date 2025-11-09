import typia from "typia";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_0_ObjectLiteralProperty = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "ObjectLiteralProperty", 
  })(typia.json.schema<ObjectLiteralProperty, "3.0">());