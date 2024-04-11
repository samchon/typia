import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_json_application_v3_1_ObjectLiteralProperty =
  _test_json_application({
    version: "3.1",
    name: "ObjectLiteralProperty",
  })(typia.json.application<[ObjectLiteralProperty], "3.1">());
