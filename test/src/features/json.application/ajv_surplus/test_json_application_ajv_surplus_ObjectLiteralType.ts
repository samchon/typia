import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_json_application_ajv_surplus_ObjectLiteralType =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ObjectLiteralType",
  })(typia.json.application<[ObjectLiteralType], "ajv", true>());
