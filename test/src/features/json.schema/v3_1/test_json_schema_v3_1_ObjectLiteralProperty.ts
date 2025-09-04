import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_json_schema_v3_1_ObjectLiteralProperty = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ObjectLiteralProperty",
  })(typia.json.schema<ObjectLiteralProperty, "3.1">());
