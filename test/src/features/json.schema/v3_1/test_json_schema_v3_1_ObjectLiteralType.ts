import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_json_schema_v3_1_ObjectLiteralType = _test_json_schema({
  version: "3.1",
  name: "ObjectLiteralType",
})(typia.json.schema<ObjectLiteralType, "3.1">());
