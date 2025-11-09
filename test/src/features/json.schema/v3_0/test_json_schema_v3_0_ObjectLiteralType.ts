import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_json_schema_v3_0_ObjectLiteralType = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "ObjectLiteralType",
  })(typia.json.schema<ObjectLiteralType, "3.0">());
