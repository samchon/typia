import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_json_application_v3_1_ObjectLiteralType =
  _test_json_application({
    version: "3.1",
    name: "ObjectLiteralType",
  })(typia.json.application<[ObjectLiteralType], "3.1">());
