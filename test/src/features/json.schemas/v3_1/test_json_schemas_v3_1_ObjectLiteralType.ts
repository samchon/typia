import typia from "typia";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_ObjectLiteralType = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "ObjectLiteralType", 
  })(typia.json.schemas<[ObjectLiteralType], "3.1">());