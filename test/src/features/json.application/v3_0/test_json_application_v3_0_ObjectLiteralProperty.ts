import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_json_application_v3_0_ObjectLiteralProperty =
  _test_json_application({
    version: "3.0",
    name: "ObjectLiteralProperty",
  })(typia.json.application<ObjectLiteralPropertyApplication, "3.0">());

interface ObjectLiteralPropertyApplication {
  insert(first: ObjectLiteralProperty): Promise<void>;
  reduce(
    first: ObjectLiteralProperty,
    second: ObjectLiteralProperty | null,
  ): Promise<ObjectLiteralProperty>;
  coalesce(
    first: ObjectLiteralProperty | null,
    second: ObjectLiteralProperty | null,
    third?: ObjectLiteralProperty | null,
  ): Promise<ObjectLiteralProperty | null>;
}
