import typia from "typia";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_0_ObjectLiteralType = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "ObjectLiteralType", 
  })(typia.json.schema<ObjectLiteralType, "3.0">());