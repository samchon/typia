import typia from "typia";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_ObjectLiteralType = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ObjectLiteralType", 
  })(typia.json.schema<ObjectLiteralType, "3.1">());